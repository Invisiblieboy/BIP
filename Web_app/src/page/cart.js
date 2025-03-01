import {creteArrowListener, payments} from "../utils/utils.js";
import {tonConnectUI} from "../ton/tc.js";
import {page_error_connect_wallet} from "./templates.js";

export let payments_settings = {can: false, token: undefined, amount: 0}

export function updateCoinInputAndValueHtml(value, coin) {
    coin = coin.toUpperCase()
    let btn_send_transaction = document.getElementById('btn_send_transaction');
    localStorage.setItem(`${coin}_input_count`, '0')

    let html
    if (!value || value <= 0) {
        if (btn_send_transaction) {
            btn_send_transaction?.classList.add('opacity-2')
            btn_send_transaction.value = 'Введите значение больше нуля'
        }
        html = '0 BIPCoin'
        payments_settings.can = false
    } else if (isNaN(value * 1)) {
        if (btn_send_transaction) {
            btn_send_transaction.classList.add('opacity-2')
            btn_send_transaction.value = 'Введено некорректное значение'
        }
        html = 'Некорректное значение'
        payments_settings.can = false
    } else {
        html = `${calcCoinValue(value, coin)} BIPCoin`
        localStorage.setItem(`${coin}_input_count`, value)

        let coin_max = localStorage.getItem(`${coin}_balance`)
        if (value * 1 <= coin_max) {
            if (btn_send_transaction) {
                btn_send_transaction.classList.remove('opacity-2')
                btn_send_transaction.value = `Оплатить ${value * 1} ${coin}`
            }
            payments_settings.can = true
            payments_settings.token = coin
            payments_settings.amount = value
        } else {
            payments_settings.can = false
            if (btn_send_transaction) {
                btn_send_transaction.classList.add('opacity-2');
                btn_send_transaction.value = `Недостаточно средств на кошельке`
            }
        }
    }
    try {
        document.getElementById(`${coin}_value`).innerHTML = html
    } catch (e) {
    }
    calcInputWidth(value, coin)
}

function calcCoinValue(value, coin) {
    let BIP_price = localStorage.getItem('BIP_price')
    if (coin.toUpperCase() === 'TON') {
        value *= localStorage.getItem('TON_price')
    }
    if (coin.toUpperCase() === 'RUB') {
        value /= localStorage.getItem('RUB_price')
    }
    return Math.round(value / BIP_price * 100) / 100
}

function calcInputWidth(value, coin) {
    let width
    if (value.length <= 1) {
        width = `${1}rem`
    } else {
        width = `${value.length * 0.5}rem`
    }
    document.getElementById(`${coin}_input_count`).style.width = width
}

export function cartInit() {
    creteArrowListener('send_to_crypto')
    creteArrowListener('send_to_card')

    // pageSendToCryptoInit
    let send_to_crypto_content = document.getElementById('send_to_crypto_content')
    let send_to_crypto_content_last
    if (!tonConnectUI.connected) {
        send_to_crypto_content_last = send_to_crypto_content.innerHTML
        send_to_crypto_content.innerHTML = page_error_connect_wallet;
    } else {
        if (send_to_crypto_content_last) {
            send_to_crypto_content.innerHTML = send_to_crypto_content_last
        }
        document.getElementById('TON_input_count').addEventListener('input', (e) => {
            updateCoinInputAndValueHtml(e.target.value, 'TON')
        });
        document.getElementById('USDT_input_count').addEventListener('input', (e) => {
            updateCoinInputAndValueHtml(e.target.value, 'USDT')
        });
    }
    //pageSendToCardInit

    let send_to_card_content = document.getElementById('send_to_card_content')
    let send_to_card_content_last
    if (!tonConnectUI.connected) {
        send_to_card_content_last = send_to_card_content.innerHTML
        send_to_card_content.innerHTML = page_error_connect_wallet;
    } else {
        if (send_to_card_content_last) {
            send_to_card_content.innerHTML = send_to_card_content_last
        }
        document.getElementById('RUB_input_count').addEventListener('input', (e) => {
            updateCoinInputAndValueHtml(e.target.value, 'RUB')
        });
        let initData;
        try {
            initData = window.Telegram.WebApp.initDataUnsafe.user.id
        } catch (e) {
            initData = 'UserID'
        }
        document.getElementById('card_send_code').innerHTML = initData
        document.getElementById('admin_card_number').innerHTML = payments.card

    }
}