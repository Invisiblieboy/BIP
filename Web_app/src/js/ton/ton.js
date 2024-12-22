import {tonConnectUI} from "./tc.js";
import {payments, USDT_wallet_address} from "../utils/utils.js";

const tonweb = new window.TonWeb();

let last_transaction

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

// EQAyro_ZGYoeeg5xNETmqMIT5RiCW2X5jZjxj7dnulPLRH3Q main
// EQBdexXHcp5bDNAW-03_bJYjIxrEiD93NUYneeOUjn1kpacb B

async function body(coin,amount,message) {
    const Address = tonweb.utils.Address;
    // const address = new Address('UQB0KK3v_9OLwkgeZ47d-p5-bpBDKjAIMDJqp_AlZSZ2UqlR');
    // const address = new Address('EQDIlPNok7SPSeQyaA2KRY8TBv6HMtWp63w2wiuii9HeeVYH');
    // const address = new Address('EQAyro_ZGYoeeg5xNETmqMIT5RiCW2X5jZjxj7dnulPLRH3Q');

    // address: 'UQB7q5qYhCOAIQbhWlIoq78ZXpGZWRn-gZc30-CSckZSMc_s',  // sender jetton wallet
    // address: 'EQBdexXHcp5bDNAW-03_bJYjIxrEiD93NUYneeOUjn1kpacb',  // sender jetton wallet
    // address: 'EQAyro_ZGYoeeg5xNETmqMIT5RiCW2X5jZjxj7dnulPLRH3Q',  // sender jetton wallet

    const address = new Address(payments.wallet);

    if (coin==='USDT'){
        amount*=1e6
    }else{
        amount*=1e9
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
        localStorage.setItem('a',USDT_wallet_address)
        return {
            validUntil: Math.floor(new Date() / 1000) + 360,
            messages: [
                {
                    address: USDT_wallet_address,
                    amount: 0.06 * 1e9,
                    payload: await body(coin,amount,message),
                }
            ]
        }
    }

}

export async function sendTransaction(coin = 'TON', amount = 0.942, message = undefined) {

    try {
        last_transaction = await tonConnectUI.sendTransaction(await getTransaction(coin, amount, message))
    } catch (e) {
        console.log(e)
    }
}
