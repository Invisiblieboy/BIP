import { Address, beginCell, toNano } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { NftItem } from '../build/NFTCollection/tact_NftItem';
import { master, owner, testnetOwner2 } from '../data';
import {NftCollection} from "../build/NFTCollection/tact_NftCollection";
import {createOffchainContent} from "../contracts/helpers";

export async function run(provider: NetworkProvider) {
    const nFTCollection = provider.open(await NftCollection.fromInit(owner,createOffchainContent('https://raw.githubusercontent.com/Invisiblieboy/BIP_utils/refs/heads/main/collection_metadata2.json')));
    const feeContract = provider.open(await NftItem.fromInit(nFTCollection.address,1n));

    await feeContract.send(
        provider.sender(),
        {
            value: toNano('0.1'),
        },
        {
            $$type: 'NftTransfer',
            query_id: 42n,
            new_owner: testnetOwner2,
            response_destination: owner,
            custom_payload: null,
            forward_amount: toNano("0.05"),
            forward_payload: beginCell().endCell().asSlice()
        }
    );

}

