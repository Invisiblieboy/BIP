import "@stdlib/deploy";
import "@stdlib/ownable";
import "./item";


contract BIPChanger with Deployable {
//    jetton_wallet_address: Address;
    nft_address: Address;
    const minTonsForStorage: Int = ton("0.05");


    init(nft_address:Address) {
//        self.jetton_wallet_address = jetton_wallet;
        self.nft_address = nft_address;
    }

    receive(msg: TokenNotification){
//        require(sender() == self.jetton_wallet_address, "Invalid sender");

        let ctx:Context = context();
        let balance_befor: Int = myBalance() - ctx.value;
        if (balance_befor < self.minTonsForStorage) {
            ctx.value -= min(self.minTonsForStorage - balance_befor, ton("0.05"));
        }
        send(SendParameters{
            to: self.nft_address,
            value: ctx.value,
            mode: 0,
            body: RequestNftDeploy{
                amount: ton("0.03"),
                owner: msg.from,
                content: self.get_content(msg.amount),
                BIP_value: msg.amount
            }.toCell()
        });
    }

    get fun get_content(value:Int): Cell {
        let link = beginString()
                .concat("https://nft.biptoken.xyz/CreateItemMetadata?value=")
                .concat(value.toCoinsString());

        return beginCell().storeUint(1, 8).storeSlice(link.toSlice()).endCell();
    }
}