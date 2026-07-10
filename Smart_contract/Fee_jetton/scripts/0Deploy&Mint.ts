import {run as deployBIPMaster} from '../scriptsAll/deployBIPMaster'
import {run as mintToken} from '../scriptsAll/mintToken'

import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {

    await deployBIPMaster(provider)
    await mintToken(provider)
}