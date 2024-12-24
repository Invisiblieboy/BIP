import {tonConnectUI} from "./tc.js";
import {payments} from "../utils/utils.js";

const tonweb = new window.TonWeb();

async function forwardPayload(message, to_base64 = true) {
    let a = new tonweb.boc.Cell();
    a.bits.writeUint(0, 32);
    a.bits.writeString(message);
    if (to_base64) {
        return tonweb.utils.bytesToBase64(await a.toBoc())
    } else {
        return a;
    }
}

async function body(coin, amount, message) {
    const Address = tonweb.utils.Address;
    const address = new Address(payments.wallet);

    if (coin === 'USDT') {
        amount *= 1e6
    } else {
        amount *= 1e9
    }

    let cell = new tonweb.boc.Cell();
    cell.bits.writeUint(0xf8a7ea5, 32)
    cell.bits.writeUint(0, 64)
    cell.bits.writeCoins(amount)
    cell.bits.writeAddress(address)
    cell.bits.writeAddress(address)
    cell.bits.writeBit(0)
    cell.bits.writeCoins(1)
    cell.bits.writeBit(0)
    return tonweb.utils.bytesToBase64(await cell.toBoc());
}

async function getTransaction(coin, amount, message) {
    let address
    if (!message) {
        message = crypto.randomUUID().replaceAll('-', '')
    }
    if (coin === 'TON') {
        address = payments.wallet
        return {
            validUntil: Math.floor(new Date() / 1000) + 360,
            messages: [
                {
                    address: address,
                    amount: amount * 1e9,
                    // payload: await forwardPayload(message),
                }
            ]
        }
    } else {
        return {
            validUntil: Math.floor(new Date() / 1000) + 360,
            messages: [
                {
                    address: localStorage.getItem('USDT_wallet_address'),
                    amount: 0.06 * 1e9,
                    payload: await body(coin, amount, message),
                }
            ]
        }
    }

}

export async function sendTransaction(coin = 'TON', amount = 0.942, message = undefined) {
    return await tonConnectUI.sendTransaction(await getTransaction(coin, amount, message))
}
