import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/feeContract/getCommission.tact',
    options: {
        debug: true,
    },
};
