import { Address, beginCell, toNano } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { JettonDefaultWallet } from '../build/BIPJetton/tact_JettonDefaultWallet';
import { master, owner, testnetOwner2 } from '../data';
import { FeeJetton } from '../build/BIPMaster/tact_FeeJetton';
import { FeeContract } from '../build/BIPFeeContract/tact_FeeContract';

export async function run(provider: NetworkProvider) {
    const feeContract = provider.open(await FeeContract.fromInit(owner));

    await feeContract.send(
        provider.sender(),
        {
            value: toNano('0.2'),
        },
        {
            $$type: 'TokenTransfer',
            query_id: 121312312n,
            amount: toNano('100'),
            destination: Address.parse('0QCUqgn-Ix3kuzhPAkKKiqqXQazsJ98K3VSCi4QJ3ZTGC7O1'),
            response_destination: owner,
            custom_payload: null,
            forward_ton_amount: 1n,
            forward_payload: beginCell().endCell().asSlice()
        }
    );

}

