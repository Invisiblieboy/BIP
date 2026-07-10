import { toNano } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { FeeJetton } from '../build/BIPMaster/tact_FeeJetton';
import { metadata, owner } from '../data';
import { buildOnchainMetadata } from '../build_data';

export async function run(provider: NetworkProvider) {
    const bIPJetton = provider.open(await FeeJetton.fromInit(owner, buildOnchainMetadata(metadata)));

    await bIPJetton.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );
    await provider.waitForDeploy(bIPJetton.address);
}

