import {Address, contractAddress, toNano} from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { owner } from '../../NFT/data';
import {createOffchainContent} from "../../NFT/contracts/helpers";
import {JettonDefaultWallet} from "../build/BIPJetton/tact_JettonDefaultWallet"
import {BIPChanger} from "../../NFT/build/Changer/tact_BIPChanger"
import {NftCollection} from "../../NFT/build/NFTCollection/tact_NftCollection";
import {run as deployNFTCollection} from "../../NFT/scripts/deployNFTCollection"

export async function run(provider: NetworkProvider) {
    let NFTColl = await deployNFTCollection(provider,owner,true)

    const Changer = provider.open(await BIPChanger.fromInit(NFTColl.address));

    await Changer.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );
    await provider.waitForDeploy(Changer.address);

    await NFTColl.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'ChangeOwner',
            queryId: 0n,
            newOwner: Changer.address
        }

    )

}
