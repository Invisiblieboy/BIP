import { Address, beginCell, toNano } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { JettonDefaultWallet } from '../build/BIPJetton/tact_JettonDefaultWallet';
import { master, owner, testnetOwner2 } from '../data';
import { getDedustSwapData } from '../build_data';

export async function run(provider: NetworkProvider) {
    const feeContract = provider.open(await JettonDefaultWallet.fromInit(testnetOwner2,master));

    await feeContract.send(
        provider.sender(),
        {
            value: toNano('0.2'),
        },
        {
            $$type: 'TokenTransfer',
            query_id: 42n,
            amount: toNano("0.1"),
            destination: Address.parse('EQB5pj8eAdP7bfRqEaI7jZEE1V8ZPtfjqleFAG_AXnHnHXs0'),
            response_destination: testnetOwner2,
            custom_payload: null,
            forward_ton_amount: toNano("0.15"),
            forward_payload: beginCell().endCell().asSlice()
        }
    );

}

