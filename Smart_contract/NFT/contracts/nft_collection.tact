import "@stdlib/deploy";
import "@stdlib/ownable";
import "./item";

struct CollectionData {
    next_index: Int;
    content: Cell;
    owner: Address;
}

contract NftCollection with OwnableTransferable, Deployable {
    owner: Address;
    next_index: Int as uint256 = 0;
    content: Cell;
    id: String;

    init(owner: Address, content: Cell,id: String) {
        self.owner = owner;
        self.content = content;
        self.id = id;
    }

    receive(msg: RequestNftDeploy) {
        self.requireOwner();
        let nft_init: StateInit = initOf NftItem(myAddress(), self.next_index);
        send(SendParameters{
                to: contractAddress(nft_init),
                value: msg.amount,
                mode: SendPayGasSeparately,
                bounce: false,
                data: nft_init.data,
                code: nft_init.code,
                body: NftDeploy{
                    index: self.next_index,
                    owner: msg.owner,
                    content: msg.content,
                    BIP_value: msg.BIP_value
                }.toCell()
            });
        self.next_index += 1;
    }

    get fun get_collection_data(): CollectionData {
        return CollectionData{next_index: self.next_index, content: self.content, owner: self.owner};
    }
    get fun get_nft_address_by_index(index: Int): Address {
        return contractAddress(initOf NftItem(myAddress(), index));
    }
    get fun get_nft_content(index: Int, individual_content: Cell): Cell {
        return individual_content;
    }
}