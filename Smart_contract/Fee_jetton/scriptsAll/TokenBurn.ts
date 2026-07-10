import { Address, toNano } from '@ton/core';
import { FeeJetton } from '../wrappers/BIPMaster';
import { JettonDefaultWallet } from '../wrappers/BIPJetton'
import { NetworkProvider } from '@ton/blueprint';
import {owner,metadata,master} from '../data';
import { buildOnchainMetadata } from '../build_data';

export async function run(provider: NetworkProvider) {

    const bIPContract = provider.open(await JettonDefaultWallet.fromInit(owner, master));

    await bIPContract.send(
        provider.sender(),
        {
            value: toNano('0.052')
        },
        {
            $$type: 'TokenBurn',
            query_id: 1n,
            amount: toNano('10'),
            response_destination: owner,
            custom_payload: null
        }
    );

    await provider.waitForDeploy(bIPContract.address);

}
