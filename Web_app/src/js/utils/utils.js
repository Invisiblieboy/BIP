import {updateBIPBalanceHTML} from "../page/wallet.js";
import {preloadImages} from "./download_img.js";
import {init as tgInit} from "./tgUtils.js";
import {swipeInit} from "../page/swipe.js";
import {buttonsInit} from "./buttons_handler.js";

export let params = {};
export let payments
export const path_to_folder = "static/img/"
const USDT_jetton_address = '0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe'
const BIP_jetton_address = '0:6fc7606752ffebad72f732e6be9ce0b6901a7c183ea55bb7d1a8598b900cf3bd'
const jettons_white_list = {'BIP': BIP_jetton_address, 'USDT': USDT_jetton_address}

export function parse_url() {
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
        axios.get(`https://tonapi.io/v2/accounts/${address}/jettons`).then((response) => {
            for (let jetton of response.data.balances) {
                for (let [coin, addr] of Object.entries(jettons_white_list)) {
                    if (jetton.jetton.address === addr) {
                        localStorage.setItem(`${coin}_balance`, jetton.balance / 10 ** jetton.jetton.decimals)
                        localStorage.setItem(`${coin}_wallet_address`, jetton.wallet_address.address)
                    }
                }
            }
            updateBIPBalanceHTML()
        })
        axios.get(`https://tonapi.io/v2/accounts/${address}`)
            .then((response) => {
                localStorage.setItem('TON_balance', response.data.balance / 10 ** 9)
            }).catch((e) => {
            localStorage.setItem('TON_balance', 0)
        }).finally(() => {
            updateBIPBalanceHTML()
        })

    } else {
        localStorage.setItem('TON_balance', 0)
        for (let [coin, addr] of Object.entries(jettons_white_list)) {
            localStorage.setItem(`${coin}_balance`, '0')
            localStorage.setItem(`${coin}_wallet_address`, '')
        }
    }
}

export async function utilsInit() {
    await preloadImages()
    await buttonsInit()
    tgInit()
    swipeInit()

    const $root = document.querySelector('#root')
    const div = document.createElement('div');
    div.id = "bottom-navigation";
    $root.appendChild(div);

    updatePriceAndBalance()
    setInterval(updatePriceAndBalance, 10000)

    await axios.get('https://api.biptoken.xyz/v1/info/payments').then((response) => {
        if (response.status === 200) {
            payments = response.data
        }
    })
}