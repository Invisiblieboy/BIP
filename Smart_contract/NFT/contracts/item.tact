import "@stdlib/deploy";
import "./messages";

const min_balance: Int = ton("0.03");
const gas_consumption: Int = ton("0.02");

struct NftData {
    deployed: Bool;
    index: Int;
    collection: Address;
    owner: Address;
    content: Cell;
}


trait NftStandart {
    deployed: Bool;
    collection: Address;
    owner: Address;
    index: Int;
    content: Cell;
    BIP_value: Int;

    receive(msg: NftTransfer) {
        let ctx: Context = context();
        require(self.deployed, "Not Deployed");
        require(ctx.sender == self.owner, "Invalid Owner");
        let min: Int = min_balance - min(min_balance, myBalance());
        let required: Int = gas_consumption + msg.forward_amount + min;
        if (msg.forward_amount != 0) {
            required = required + ctx.readForwardFee();
        }
        require(ctx.value >= required, "Invalid Amount");
        let cashback: Int = ctx.value - gas_consumption - msg.forward_amount - min;
        if (msg.forward_amount != 0) {
            cashback = cashback - ctx.readForwardFee();
            send(SendParameters{
            to: msg.new_owner,
            value: msg.forward_amount,
            mode: SendPayGasSeparately,
            body: NftOwnershipAssigned{
            query_id: msg.query_id,
            prev_owner: self.owner,
            forward_payload: msg.forward_payload
            }.toCell()
            });
        }
        self.owner = msg.new_owner;
        if (cashback > 0) {
            send(SendParameters{
            to: msg.response_destination,
            value: cashback,
            body: NftExcesses{
            query_id: msg.query_id
            }.toCell()
            });
        }
    }
    receive(msg: NftGetStaticData) {
        send(SendParameters{
            to: sender(),
            value: 0,
            mode: SendRemainingValue,
            body: NftReportStaticData{
                query_id: msg.query_id,
                owner: self.owner,
                index: self.index,
                collection: self.collection,
                BIP_value: self.BIP_value
                }.toCell()
        });
    }

    get fun get_nft_data(): NftData {
        return NftData{deployed: self.deployed, index: self.index, collection: self.collection, owner: self.owner, content: self.content};
    }
}

contract NftItem with NftStandart {
    deployed: Bool = false;
    collection: Address;
    owner: Address;
    index: Int as uint256;
    content: Cell;
    BIP_value: Int as coins = 0;

    init(collection: Address, index: Int) {
        self.collection = collection;
        self.index = index;

        self.owner = self.collection;
        self.content = emptyCell();
    }

    receive(msg: NftDeploy) {
        require(sender() == self.collection, "Invalid Sender");
        require(!self.deployed, "Already Deployed");
        self.deployed = true;
        self.owner = msg.owner;
        self.content = msg.content;
        self.BIP_value = msg.BIP_value;
    }

    receive(msg: NftDestroy) {
        require(sender() == self.owner, "Invalid Owner");
        self.owner = myAddress();
        send(SendParameters{
        to: sender(),
        value: 0,
        mode: SendRemainingBalance,
        body: NftExcesses{
        query_id: msg.query_id
        }.toCell()
        });
    }

    get fun get_BIP_value(): Int {
        return self.BIP_value
    }

}