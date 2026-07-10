import {Address, toNano} from '@ton/core';
import { NftCollection } from '../wrappers/NFTCollection';
import { NetworkProvider } from '@ton/blueprint';
import {  owner } from '../data';
import { buildOnchainMetadata } from '../build_data';
import {createOffchainContent} from "../contracts/helpers";
import now = jest.now;

export async function run(provider: NetworkProvider) {
    const nFTCollection = provider.open(await NftCollection.fromInit(owner,createOffchainContent('https://nft.biptoken.xyz/CollectionMetadata'),Date()));

    await nFTCollection.send(
        provider.sender(),
        {
            value: toNano('0.1'),
        },
        {
            $$type: 'RequestNftDeploy',
            amount: toNano("0.05"),
            owner: owner,
            BIP_value: 3000n,
            content: createOffchainContent('https://nft.biptoken.xyz/CreateItemMetadata?value=3000')
        }
    );
}
