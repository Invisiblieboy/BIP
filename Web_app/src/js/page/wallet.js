import {tonConnectUI} from "../ton/tc.js";

export function walletInit() {
    const wallet_please_connect = document.getElementById('wallet-please-connect')
    const wallet_access_connect = document.getElementById('wallet-access-connect')
    const wallet_balance = document.getElementById('wallet_balance')

    if (wallet_please_connect) {
        if (tonConnectUI.connected) {
            wallet_please_connect.classList.add('hide')
            wallet_access_connect.classList.remove('hide')
            wallet_balance.classList.remove('hide')

        } else {
            wallet_access_connect.classList.add('hide')
            wallet_please_connect.classList.remove('hide')
            wallet_balance.classList.add('hide')
        }
    }
    updateBIPBalanceHTML()
}

export function updateBIPBalanceHTML() {
    let BIP_balance = localStorage.getItem('BIP_balance')
    const BIP_balance_elem = document.getElementById('BIP_balance')
    let BIP_price = localStorage.getItem('BIP_price')
    const BIP_price_elem = document.getElementById('BIP_price')
    let TON_balance = localStorage.getItem('TON_balance')
    const TON_balance_elem = document.getElementById('TON_balance')
    let USDT_balance = localStorage.getItem('USDT_balance')
    const USDT_balance_elem = document.getElementById('USDT_balance')
    if (BIP_balance_elem) {
        BIP_balance_elem.innerHTML = Math.round(BIP_balance * 100) / 100
        TON_balance_elem.innerHTML = Math.round(TON_balance * 100) / 100
        USDT_balance_elem.innerHTML = Math.round(USDT_balance * 100) / 100
        BIP_price_elem.innerHTML = Math.round(BIP_price * 10000) / 10000

    }
}