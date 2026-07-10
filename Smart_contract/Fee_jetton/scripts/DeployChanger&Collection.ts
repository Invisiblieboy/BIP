import {Address, contractAddress, toNano} from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { owner } from '../../NFT/data';
import {createOffchainContent} from "../scriptsAll/helpers";
import {JettonDefaultWallet} from "../build/BIPJetton/tact_JettonDefaultWallet"
import {BIPChanger} from "../build/Changer/tact_BIPChanger"
import {NftCollection} from "../build/NFTCollection/tact_NftCollection";
import {run as deployNFTCollection} from "../scriptsAll/deployNFTCollection"
import { buildOnchainMetadata } from '../build_data';
import { master } from '../data';

export async function run(provider: NetworkProvider) {
    const Changer = provider.open(await BIPChanger.fromInit(createOffchainContent('https://nft.biptoken.xyz/CollectionMetadata'),master));

    await Changer.send(
        provider.sender(),
        {
            value: toNano('0.1'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );
    await provider.waitForDeploy(Changer.address);
}
