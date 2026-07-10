import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { BIPJetton } from '../wrappers/BIPJetton';
import '@ton/test-utils';

describe('BIPJetton', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let bIPJetton: SandboxContract<BIPJetton>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        bIPJetton = blockchain.openContract(await BIPJetton.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await bIPJetton.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: bIPJetton.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and bIPJetton are ready to use
    });
});
