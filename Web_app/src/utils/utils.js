import {updateBIPBalanceHTML, updateBIPChangerHTML} from "../page/wallet.js";
import {init as tgInit, tg} from "./tgUtils.js";
import {swipeInit} from "../page/swipe.js";
import {buttonsInit} from "./buttons_handler.js";

export let params = {};
export let BIP_NFTs = [];
export let payments
export let is_mobile
export let server_wallet_data = {}

const USDT_jetton_address = '0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe'
const BIP_jetton_address = '0:786e74bba071d57c75004bb41bf978ea73e00b03f3f3fbf2b73ea0426f97d6e9'
const jettons_white_list = {'BIP': BIP_jetton_address, 'USDT': USDT_jetton_address}

export function parse_url() {
    let url_params = location.search.substring(1).split("&");
    for (let i = 0; i < url_params.length; i++) {
        let param = url_params[i].split('=');
        params[param[0]] = param[1];
    }

}

function get_server_wallet_data() {
    if (!tg.initData) {
        return server_wallet_data
    }
    axios.get('https://api.biptoken.xyz/v1/wallet/info', {
        params: {
            tgInitData: tg.initData
        }
    }).then((response) => {
        if (response.data['op'] === "0") {
            server_wallet_data = response.data.data
        }
    }).finally(() => {
        console.log(server_wallet_data)
        return server_wallet_data
    })
}

function updateRubPrice() {
    axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then((response) => {
        localStorage.setItem(`RUB_price`, response.data.Valute.USD.Value)
    }).finally(() => {
        return localStorage.getItem(`RUB_price`)
    })
}


function updateTonPrice() {
    axios.get('https://api.coingecko.com/api/v3/coins/the-open-network').then((response) => {
        localStorage.setItem(`TON_price`, response.data.market_data.current_price.usd)
    }).finally(() => {
        return localStorage.getItem(`TON_price`)
    })
}

function updateBipPrice() {
    let pool_addr = "EQCJWbehGyHtkgw6IMzcY1VPAJwre1sWWGvqKYm1_h0CpsJe"
    axios.get(`https://api.geckoterminal.com/api/v2/networks/ton/pools/${pool_addr}`).then((response) => {
        localStorage.setItem(`BIP_price`, response.data.data.attributes.base_token_price_quote_token)
    }).finally(() => {
        return localStorage.getItem(`BIP_price`)
    })
}


export function updatePriceAndBalance() {
    let address = localStorage.getItem('wallet_address')
    if (address) {
        axios.get(`https://tonapi.io/v2/accounts/${address}/jettons`).then((response) => {
            axios.get(`https://tonapi.io/v2/accounts/${localStorage.getItem("wallet_address")}/nfts?collection=EQDhO_YVxvb3p68hqte0kNG5jdO44WQFgWdCe8GvgVkrws4Z`).then((response) => {
                BIP_NFTs = response.data.nft_items
                updateBIPChangerHTML()
            })
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

export function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

let arrow_states = {}

export function creteArrowListener(elem) {
    let elem_arrow = document.getElementById(`${elem}_arrow`)
    let elem_content = document.getElementById(`${elem}_content`)
    arrow_states[elem] = 0

    elem_arrow.addEventListener("click", () => {
        if (arrow_states[elem]) {
            elem_arrow.innerHTML = 'keyboard_arrow_down'
            elem_content.classList.add('hide')
            arrow_states[elem] = 0
        } else {
            elem_arrow.innerHTML = 'keyboard_arrow_up'
            elem_content.classList.remove('hide')
            arrow_states[elem] = 1
        }
    })
}

export async function utilsInit() {
    await buttonsInit()
    tgInit()
    swipeInit()


    document.querySelectorAll('.material-symbols-outlined').forEach(icon => {
        icon.classList.add('icon-load');
    });
    document.fonts.ready.then(() => {
        document.querySelectorAll('.material-symbols-outlined').forEach(icon => {
            icon.classList.remove('icon-load');
        });
    });

    const $root = document.querySelector('#root')
    const div = document.createElement('div');
    div.id = "bottom-navigation";
    $root.appendChild(div);


    setInterval(updateRubPrice, 20 * 60 * 1000)
    setInterval(updateTonPrice, 60 * 1000)
    setInterval(updateBipPrice, 60 * 1000)
    if (tg.initData) {
        setInterval(get_server_wallet_data, 10 * 1000)
    }

    setInterval(updatePriceAndBalance, 10 * 1000)


    await axios.get('https://api.biptoken.xyz/v1/info/payments').then((response) => {
        if (response.status === 200) {
            payments = response.data
        }
    })

    is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}