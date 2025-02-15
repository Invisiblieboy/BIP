import {path_to_folder, payments} from "../utils/utils.js";
import {page_error_connect_wallet, page_send_to_card_content, page_send_to_crypto_content} from "./templates.js";

export let payments_settings = {can: false, token: undefined, amount: 0}

export function cartPreInit() {
    const cart_crypto_arrow = document.getElementById('cart_crypto_arrow')
    const cart_card_arrow = document.getElementById('cart_card_arrow')

    let cart_crypto_arrow_state = 0
    let cart_card_arrow_state = 0

    cart_card_arrow.addEventListener("click", () => {
        const send_to_card_content = document.getElementById('send_to_card_content')

        if (cart_card_arrow_state) {
            cart_card_arrow.src = `${path_to_folder}normal/arrow_down.png`
            send_to_card_content.classList.add('hide')
            cart_card_arrow_state = 0
        } else {
            cart_card_arrow.src = `${path_to_folder}normal/arrow_up.png`
            cart_card_arrow_state = 1

            send_to_card_content.classList.remove('hide')
            if (localStorage.getItem('wallet_connect') === 'true') {
                send_to_card_content.innerHTML = page_send_to_card_content
                pageSendToCardInit()
            } else {
                send_to_card_content.innerHTML = page_error_connect_wallet
            }
        }
    })

    cart_crypto_arrow.addEventListener("click", () => {
        const send_to_crypto_content = document.getElementById('send_to_crypto_content')

        if (cart_crypto_arrow_state) {
            cart_crypto_arrow.src = `${path_to_folder}normal/arrow_down.png`
            send_to_crypto_content.classList.add('hide')
            cart_crypto_arrow_state = 0
        } else {
            cart_crypto_arrow.src = `${path_to_folder}normal/arrow_up.png`
            cart_crypto_arrow_state = 1

            send_to_crypto_content.classList.remove('hide')
            if (localStorage.getItem('wallet_connect') === 'true') {
                send_to_crypto_content.innerHTML = page_send_to_crypto_content
                pageSendToCryptoInit()
            } else {
                send_to_crypto_content.innerHTML = page_error_connect_wallet
            }
        }
    })
}

function pageSendToCryptoInit() {
    let ton_input = document.getElementById('TON_input_count');
    let usdt_input = document.getElementById('USDT_input_count');

    ton_input.addEventListener('input', (e) => {
        updateCoinInputAndValueHtml(e.target.value, 'TON')
    });
    usdt_input.addEventListener('input', (e) => {
        updateCoinInputAndValueHtml(e.target.value, 'USDT')
    });
}

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
    try{
        document.getElementById(`${coin}_value`).innerHTML = html
    } catch (e){}
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

function pageSendToCardInit() {
    let rub_input = document.getElementById('RUB_input_count');
    let rub_value = document.getElementById('RUB_value');

    rub_input.addEventListener('input', (e) => {
        updateCoinInputAndValueHtml(e.target.value, 'RUB')
    });

    let code = document.getElementById('card_send_code');
    let initData;
    try {
        initData = window.Telegram.WebApp.initDataUnsafe.user.id
    } catch (e) {
        initData = 'UserID'
    }
    code.innerHTML = initData
    const admin_card_number_elem = document.getElementById('admin_card_number')
    admin_card_number_elem.innerHTML = payments.card

}

export function cartInit() {
    cartPreInit()
}