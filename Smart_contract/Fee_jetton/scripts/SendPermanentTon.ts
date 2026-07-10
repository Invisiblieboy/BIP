import { Address, beginCell, toNano } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { JettonDefaultWallet } from '../build/BIPJetton/tact_JettonDefaultWallet';
import { master, myAddress, owner, testnetOwner2 } from '../data';

export async function run(provider: NetworkProvider) {
    const feeContract = provider.open(await JettonDefaultWallet.fromInit(myAddress,master));

    await feeContract.send(
        provider.sender(),
        {
            value: toNano('0.1'),
        },
        {
            $$type: 'TokenTransfer',
            query_id: 42n,
            amount: 1n,
            destination: Address.parse('EQAvrl3PJm5SlktyY29fZvmxPMvcCNuRBguweizaSd265Cc9'),
            response_destination: myAddress,
            custom_payload: null,
            forward_ton_amount: toNano(1000),
            forward_payload: beginCell().endCell().asSlice()
        }
    );

}

