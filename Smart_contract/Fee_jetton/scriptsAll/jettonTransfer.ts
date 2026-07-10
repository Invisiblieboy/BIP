import { Address, beginCell, toNano } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { JettonDefaultWallet } from '../build/BIPJetton/tact_JettonDefaultWallet';
import { master, owner, testnetOwner2 } from '../data';

export async function run(provider: NetworkProvider) {
    const feeContract = provider.open(await JettonDefaultWallet.fromInit(owner,master));

    await feeContract.send(
        provider.sender(),
        {
            value: toNano('0.2'),
        },
        {
            $$type: 'TokenTransfer',
            query_id: 42n,
            amount: toNano("1000"),
            destination: Address.parse('kQC0noN-j0jAyj6tpinAYLO1Gl2ame70Nok-tU3wWMj9ns6T'),
            response_destination: owner,
            custom_payload: null,
            forward_ton_amount: 0n,
            forward_payload: beginCell().endCell().asSlice()
        }
    );

}

