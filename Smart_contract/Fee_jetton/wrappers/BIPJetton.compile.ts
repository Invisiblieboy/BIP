import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/feeJetton/wallet.tact',
    options: {
        debug: true,
    },
};
