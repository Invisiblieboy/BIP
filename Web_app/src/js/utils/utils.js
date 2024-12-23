import {connectWallet, disconnetWallet} from "../ton/tc.js";
import {selectPage} from "../index.js";
import {selectImg, setUnselect} from "../page/nav-bar.js";
import {updateBIPBalanceHTML} from "../page/wallet.js";
import {sendTransaction} from "../ton/ton.js";
import {payments_settings} from "../page/cart.js";

export let params = {};
export let payments
export const path_to_folder = "static/img/"

export let USDT_wallet_address = undefined
const USDT_jetton_address = '0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe'
const BIP_jetton_address = '0:6fc7606752ffebad72f732e6be9ce0b6901a7c183ea55bb7d1a8598b900cf3bd'

function parse_url() {
    let url_params = location.search.substring(1).split("&");
    for (let i = 0; i < url_params.length; i++) {
        let param = url_params[i].split('=');
        params[param[0]] = param[1];
    }

}

export function updatePriceAndBalance() {
    let address = localStorage.getItem('wallet_address')
    axios.get('https://api.biptoken.xyz/v1/price/tokens').then((response) => {
        let prices_nuw = Object(response.data)
        Object.entries(prices_nuw).forEach((item) => {
            localStorage.setItem(`${item[0].toUpperCase()}_price`, item[1])
        })
    })

    if (address) {
        for (let [coin, addr] of Object.entries({'BIP': BIP_jetton_address, 'USDT': USDT_jetton_address})) {
            axios.get(`https://tonapi.io/v2/accounts/${address}/jettons/${addr}`)
                .then((response) => {
                        let data = response.data
                        localStorage.setItem(`${coin}_balance`, data.balance / 10 ** data.jetton.decimals)
                        if (addr === USDT_jetton_address) {
                            USDT_wallet_address = data.wallet_address.address
                        }
                    }
                ).catch((e) => {
                localStorage.setItem(`${coin}_balance`, 0)
            }).finally(() => {
                updateBIPBalanceHTML()
            })
        }

        axios.get(`https://tonapi.io/v2/accounts/${address}`)
            .then((response) => {
                localStorage.setItem('TON_balance', response.data.balance / 10 ** 9)
            }).catch((e) => {
            localStorage.setItem('TON_balance', 0)
        }).finally(() => {
            updateBIPBalanceHTML()
        })
    }

}

export function utilsInit() {
    const $root = document.querySelector('#root')
    const div = document.createElement('div');
    div.id = "bottom-navigation";
    $root.appendChild(div);

    updatePriceAndBalance()
    setInterval(updatePriceAndBalance, 10000)

    axios.get('https://api.biptoken.xyz/v1/info/payments').then((response) => {
        if (response.status === 200) {
            payments = response.data
        }
    })

}

export async function preInit() {
    parse_url()

    document.addEventListener("click", async function (e) {
        if (e.target.className.includes("link-biptoken")) {
            window.open("https://t.me/BIPholders", "_blank")
        }
        if (e.target.className.includes("link-bipizm")) {
            window.open("https://t.me/BIPuserchat", "_blank")
        }
        if (e.target.className.includes("link-biplions")) {
            window.open("https://t.me/biplions1", "_blank")
        }
        if (e.target.className.includes("link-tgbot")) {
            window.open("https://t.me/BIPapp_bot?start=app", "_blank")
        }
        if (e.target.className.includes("link-baltinvestproject")) {
            window.open("https://t.me/BaltInvestProekt", "_blank")
        }
        if (e.target.className.includes("link-how-buy-usdt-on-wallet")) {
            window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-ili-lyuboj-drugoj-token-12-04", "_blank")
        }
        if (e.target.className.includes("link-how-buy-usdt-on-CEX")) {
            window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-na-Birzhe-12-04", "_blank")
        }
        if (e.target.className.includes("link-how-buy-verif-on-CEX")) {
            window.open("https://telegra.ph/Kak-kupit-BIP-imeya-verifikaciyu-na-Birzhe-12-04", "_blank")
        }
        if (e.target.className.includes("link-how-buy-rub")) {
            window.open("https://telegra.ph/Kak-kupit-BIP-imeya-RUB-12-04", "_blank")
        }
        if (e.target.className.includes("link-how-create-tk")) {
            window.open("https://telegra.ph/Kak-sozdat-svoj-koshelek-Tonkeeper-12-16", "_blank")
        }
        if (e.target.className.includes("btn_wallet_connect")) {
            await connectWallet()
        }
        if (e.target.className.includes("wallet-disconnect")) {
            await disconnetWallet()
        }
        if (e.target.id === "copy_admin_card_number") {
            let elem = document.getElementById('admin_card_number')
            elem.classList.add('anim')
            setTimeout(() => elem.classList.remove('anim'), 1000)
            await navigator.clipboard.writeText(elem.innerHTML)
        }
        if (e.target.id === "btn_send_transaction") {
            let message = crypto.randomUUID().replaceAll('-', '')
            if (payments_settings.can) {
                await sendTransaction(payments_settings.token, payments_settings.amount, message).then(() => {
                    document.getElementById('btn_send_transaction').value = 'Транзакция обрабатывается'
                })
            }
        }
        if (e.target.id === "copy_card_send_code") {
            let elem = document.getElementById('card_send_code')
            elem.classList.add('anim')
            setTimeout(() => elem.classList.remove('anim'), 1000)
            await navigator.clipboard.writeText(elem.innerHTML)
        }
        if (e.target.className.includes("btn_page_wallet")) {
            selectPage('wallet')
            setUnselect()
            selectImg('wallet')
        }
    })
}