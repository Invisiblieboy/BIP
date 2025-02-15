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

async function body(amount, destination, forward_ton_amount = 1) {
    const Address = tonweb.utils.Address;

    let cell = new tonweb.boc.Cell();
    cell.bits.writeUint(0xf8a7ea5, 32)              // jetton transfer op code
    cell.bits.writeUint(Date.now(), 64)             // query_id:uint64
    cell.bits.writeCoins(amount)                    // amount:(VarUInteger 16) -  Jetton amount for transfer (decimals = 6 - USDT, 9 - default). Function toNano use decimals = 9 (remember it)
    cell.bits.writeAddress(new Address(destination))// destination:MsgAddress
    cell.bits.writeAddress(new Address(localStorage.getItem('wallet_address')))  // response_destination:MsgAddress
    cell.bits.writeUint(0, 1)                       // custom_payload:(Maybe ^Cell)
    cell.bits.writeCoins(forward_ton_amount)        // forward_ton_amount:(VarUInteger 16) - if >0, will send notification message
    cell.bits.writeUint(0, 1)                       // forward_payload:(Either Cell ^Cell)
    return tonweb.utils.bytesToBase64(await cell.toBoc());

}

async function getTransaction(coin, jetton_amount) {
    if (coin === 'TON') {
        return {
            validUntil: Math.floor(new Date() / 1000) + 360,
            messages: [
                {
                    address: payments.buy_wallet,
                    amount: 0.06 * 1e9,
                }
            ]
        }
    } else if (coin === 'USDT') {
        jetton_amount *= 1e6;
        return {
            validUntil: Math.floor(new Date() / 1000) + 360,
            messages: [
                {
                    address: localStorage.getItem('USDT_wallet_address'),
                    amount: 0.06 * 1e9,
                    payload: await body(jetton_amount, payments.buy_wallet)
                }
            ]
        }
    } else if (coin === 'BIP') {
        jetton_amount *= 1e9;
        return {
            validUntil: Math.floor(new Date() / 1000) + 360,
            messages: [
                {
                    address: localStorage.getItem('BIP_wallet_address'),
                    amount: 0.2 * 1e9,
                    payload: await body(jetton_amount, payments.nft_wallet, 0.1 * 1e9),
                }
            ]
        }
    }
}

export async function sendTransaction(coin = 'TON', amount = 0.942) {
    return await tonConnectUI.sendTransaction(await getTransaction(coin, amount))
}
