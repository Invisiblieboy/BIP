import { address, Address, beginCell, contractAddress, toNano } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { NftItem } from '../build/NFTCollection/tact_NftItem';
import { master, owner, testnetOwner2 } from '../data';
import {NftCollection} from "../build/NFTCollection/tact_NftCollection";
import {createOffchainContent} from "./helpers";
import {BIPChanger} from "../build/Changer/tact_BIPChanger"


export async function run(provider: NetworkProvider) {
    const nft = provider.open(await NftItem.fromInit(Address.parse("EQDhO_YVxvb3p68hqte0kNG5jdO44WQFgWdCe8GvgVkrws4Z"),0n));

    await nft.send(
        provider.sender(),
        {
            value: toNano('0.2'),
        },
        {
            $$type: 'NftTransfer',
            query_id: 42n,
            new_owner: Address.parse("EQB5pj8eAdP7bfRqEaI7jZEE1V8ZPtfjqleFAG_AXnHnHXs0"),
            response_destination: Address.parse("UQBXtL24PC0FQtMN_8CVgSssoypCwVrd8JK-oE7bKgQXDrq0"),
            custom_payload: null,
            forward_amount: toNano("0.15"),
            forward_payload: beginCell().endCell().asSlice()
        }
    );

}

