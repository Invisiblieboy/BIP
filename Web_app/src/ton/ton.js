import {tonConnectUI} from "./tc.js";
import {payments} from "../utils/utils.js";

const tonweb = new window.TonWeb();


async function createCommentCell(comment, toBase64 = true) {
    let commentCell = new tonweb.boc.Cell();
    commentCell.bits.writeUint(0, 32) // opcode для текстового комментария
    commentCell.bits.writeString(comment ? comment : ''.toString())
    if (toBase64) {
        return tonweb.utils.bytesToBase64(await commentCell.toBoc());
    }
    return commentCell
}


async function jetton_body(amount, destination, forward_ton_amount = 1, comment = null) {
    const Address = tonweb.utils.Address;

    let cell = new tonweb.boc.Cell();
    cell.bits.writeUint(0xf8a7ea5, 32)              // jetton transfer op code
    cell.bits.writeUint(Date.now(), 64)             // query_id:uint64
    cell.bits.writeCoins(amount)                    // amount:(VarUInteger 16) -  Jetton amount for transfer (decimals = 6 - USDT, 9 - default). Function toNano use decimals = 9 (remember it)
    cell.bits.writeAddress(new Address(destination))// destination:MsgAddress
    cell.bits.writeAddress(new Address(localStorage.getItem('wallet_address')))  // response_destination:MsgAddress
    cell.bits.writeUint(0, 1)                       // custom_payload:(Maybe ^Cell)
    cell.bits.writeCoins(forward_ton_amount)        // forward_ton_amount:(VarUInteger 16) - if >0, will send notification message

    if (comment) {
        cell.bits.writeUint(1, 1)                       // forward_payload:(Either Cell ^Cell)
        cell.refs.push(createCommentCell(comment, false))
    } else {
        cell.bits.writeUint(0, 1)                       // forward_payload:(Either Cell ^Cell)
    }
    return tonweb.utils.bytesToBase64(await cell.toBoc());

}

async function nft_body(new_owner, forward_ton_amount = 0.15 * 1e9) {
    const Address = tonweb.utils.Address;

    let cell = new tonweb.boc.Cell();
    cell.bits.writeUint(0x5fcc3d14, 32)              // nft transfer op code
    cell.bits.writeUint(Date.now(), 64)             // query_id:uint64
    cell.bits.writeAddress(new Address(new_owner))// new_owner:MsgAddress
    cell.bits.writeAddress(new Address(localStorage.getItem('wallet_address')))  // response_destination:MsgAddress
    cell.bits.writeUint(0, 1)                       //  custom_payload:(Maybe ^Cell)
    cell.bits.writeCoins(forward_ton_amount)        // forward_ton_amount:(VarUInteger 16) - if >0, will send notification message
    cell.bits.writeUint(0, 1)                       // forward_payload:(Either Cell ^Cell)
    return tonweb.utils.bytesToBase64(await cell.toBoc());

}

async function getNFTTransfer(nft_address) {
    return {
        validUntil: Math.floor(new Date() / 1000) + 360,
        messages: [
            {
                address: nft_address,
                amount: 0.2 * 1e9,
                payload: await nft_body(payments.nft_wallet)
            }
        ]
    }
}

async function getTONTransaction(address, amount, comment = null) {
    return {
        validUntil: Math.floor(new Date() / 1000) + 360,
        messages: [
            {
                address: address,
                amount: amount * 1e9,
                payload: await createCommentCell(comment)
            }
        ]
    }
}


async function getJettonTransaction(my_address, dest_address, amount, forward_ton_amount = 0.000_000_001) {
    return {
        validUntil: Math.floor(new Date() / 1000) + 360,
        messages: [
            {
                address: my_address,
                amount: (0.06 + forward_ton_amount) * 1e9,
                payload: await jetton_body(amount * 1e9, dest_address, forward_ton_amount)
            }
        ]
    }
}

export async function sendBuyTransactions(coin, amount) {
    let transaction
    if (coin === 'TON') {
        transaction = getTONTransaction(payments.buy_wallet, amount)
    } else if (coin === 'USDT') {
        transaction = getJettonTransaction(localStorage.getItem('USDT_wallet_address'), payments.buy_wallet, amount * 0.001)
    }
    if (transaction) {
        return await tonConnectUI.sendTransaction(await transaction)
    }
}

export async function sendChangeNFTTransactions(amount) {
    return getJettonTransaction(localStorage.getItem('BIP_wallet_address'), payments.nft_wallet, amount, 0.15)
}

export async function sendTONTransaction(address, amount, comment = null) {
    return await tonConnectUI.sendTransaction(await getTONTransaction(address, amount, comment))
}

export async function NFTTransfer(nft_address) {
    return await tonConnectUI.sendTransaction(await getNFTTransfer(nft_address))
}
