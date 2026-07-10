import {run as deployFeeContract} from '../scriptsAll/deployFeeContract'
import {run as setFee} from '../scriptsAll/setFee'

import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {

    await deployFeeContract(provider)
    await setFee(provider)
}