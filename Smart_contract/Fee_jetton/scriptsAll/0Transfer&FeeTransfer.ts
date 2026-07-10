import {run as transfer} from './jettonTransfer'
import {run as FeeTransfer} from '../scripts/FeeTransfer'

import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {

    await transfer(provider)
    await FeeTransfer(provider)
}