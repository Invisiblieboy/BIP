import {tonConnectUI} from "../ton/tc.js";
import {is_mobile, params, server_wallet_data} from "../utils/utils.js";
import {updateCoinInputAndValueHtml} from "./cart.js";

export let nft_payment_settings = {can: false, amount: 0}

export function walletInit() {
    const wallet_please_connect = document.getElementsByClassName('wallet_please_connect')
    const wallet_access_connect = document.getElementsByClassName('wallet_access_connect')
    if (tonConnectUI.connected || params['wallet_connect'] === 'true') {
        for (let elem of wallet_please_connect) {
            elem.classList.add('hide')
        }
        for (let elem of wallet_access_connect) {
            elem.classList.remove('hide')
        }

    } else {
        for (let elem of wallet_please_connect) {
            elem.classList.remove('hide')
        }
        for (let elem of wallet_access_connect) {
            elem.classList.add('hide')
        }
    }

    let bip_input = document.getElementById('BIP_transfer_input_count');
    let send_transaction = document.getElementById('btn_send_transaction_to_sw');
    bip_input?.addEventListener('input', (e) => {
        updateCoinInputAndValueHtml(e.target.value, 'BIP_transfer')
        if (Number(e.target.value) <= server_wallet_data.balance && e.target.value && e.target.value !== '0') {
            send_transaction.classList.remove('opacity-2')
        } else {
            send_transaction.classList.add('opacity-2')
        }
    });
    if (!is_mobile && bip_input) {
        bip_input.type = 'text'
    }


    // preload_nft_img([100, 1000, 10000, 1])


    updateBIPBalanceHTML()

    updateServerWalletTransactionsHTML()
    updateServerWalletBalanceHTML()
}


function updateServerWalletBalanceHTML() {
    try {
        let balance = server_wallet_data.balance
        if (balance) {
            document.getElementById('sw_balance_num').innerHTML = Math.floor(balance * 1000) / 1000
        }
    } catch (e) {
        console.log(e)
    }
}

function updateServerWalletTransactionsHTML() {
    try {
        let sw_transactions_list = document.getElementById('sw_transactions_list')
        if (sw_transactions_list && server_wallet_data.transactions) {
            let keys = Object.keys(server_wallet_data.transactions).sort()
            let server_wallet_transactions_str = ''
            let day_html = ''
            let date_last = ''
            for (const key of keys.reverse()) {
                let value = server_wallet_data.transactions[key]
                let date = new Date(key * 1000);
                let date_md_str = date.toLocaleString('ru-RU', {
                    month: 'long',
                    day: 'numeric'
                })
                if (date_last !== date_md_str) {
                    date_last = date_md_str
                    server_wallet_transactions_str += day_html
                    day_html = `<p class="text-lg">${date_md_str}</p>`
                }
                let receive = value.value > 0
                day_html += `
                <div class="m-2 ml-4">
                    <p class="inline">${value.text}</p>
                    <p class="fl-r inline ${receive ? 'green' : ''}">${receive ? '+' : '-'}${Math.round(value.value * 1000) / 1000} BIP</p>
                </div>`
            }
            server_wallet_transactions_str += `<div class="mt-4 trs-day">${day_html}</div>`
            if (sw_transactions_list.innerHTML !== server_wallet_transactions_str) {
                sw_transactions_list.innerHTML = server_wallet_transactions_str
            }
        }
    } catch (e) {
        console.log(e)
    }
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
        BIP_balance_elem.innerHTML = Math.floor(BIP_balance * 100) / 100
        TON_balance_elem.innerHTML = Math.floor(TON_balance * 100) / 100
        USDT_balance_elem.innerHTML = Math.floor(USDT_balance * 100) / 100
        BIP_price_elem.innerHTML = Math.floor(BIP_price * 100) / 100
    }

}
