import { toNano } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { FeeContract } from '../build/BIPFeeContract/tact_FeeContract';
import { owner } from '../data';

export async function run(provider: NetworkProvider) {
    const feeContract = provider.open(await FeeContract.fromInit(owner));

    await feeContract.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'ChangeFee',
            numerator: 5n,
            denominator: 100n,
        }
    );

}

