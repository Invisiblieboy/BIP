import { toNano } from '@ton/core';
import { NftCollection } from '../wrappers/NFTCollection';
import { NetworkProvider } from '@ton/blueprint';
import {changerAddr, owner} from '../data';
import {createOffchainContent} from "../contracts/helpers";
import now = jest.now;

export async function run(provider: NetworkProvider,addr=owner,is_wait=true) {
    const nFTCollection = provider.open(await NftCollection.fromInit(addr,createOffchainContent('https://nft.biptoken.xyz/CollectionMetadata'),Date()) );

    await nFTCollection.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );
    if(is_wait){
        await provider.waitForDeploy(nFTCollection.address);
    }
    return nFTCollection
}
