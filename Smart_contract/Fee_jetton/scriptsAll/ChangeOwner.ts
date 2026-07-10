import { Address, toNano } from '@ton/core';
import { FeeJetton } from '../wrappers/BIPMaster';
import { NetworkProvider } from '@ton/blueprint';

import { buildOnchainMetadata } from '../build_data';
import { metadata, metadata_old, owner, testnetOwner2 } from '../data';

export async function run(provider: NetworkProvider) {
    const bIPContract = provider.open(await FeeJetton.fromInit(owner, buildOnchainMetadata(metadata)));
    await bIPContract.send(
        provider.sender(),
        {
            value: toNano('0.05'),

        },
        {
            $$type: 'ChangeOwner',
            queryId: 42n,
            newOwner: Address.parse('UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ')
        }
    );

}
