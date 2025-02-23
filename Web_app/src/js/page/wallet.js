import {tonConnectUI} from "../ton/tc.js";
import {updateCoinInputAndValueHtml} from "./cart.js";
import {BIP_NFTs, convertRemToPixels} from "../utils/utils.js";

export let BIP_NFTs_last_length = -1;
export let nft_payment_settings = {can: false, amount: 0}
let bip_value_last = 0;

export function walletInit() {
    const wallet_please_connect = document.getElementsByClassName('wallet_please_connect')
    const wallet_access_connect = document.getElementsByClassName('wallet_access_connect')
    const wallet_balance = document.getElementById('wallet_balance')
    const nft_changer = document.getElementById('nft_changer')
    if (tonConnectUI.connected) {
        for (let elem of wallet_please_connect) {
            elem.classList.add('hide')
        }
        for (let elem of wallet_access_connect) {
            elem.classList.remove('hide')
        }
        wallet_balance?.classList.remove('hide')

        if (Number(localStorage.getItem('BIP_balance')) > 0) {
            nft_changer?.classList.remove('hide')

            let usdt_input = document.getElementById('BIP_input_count');
            usdt_input?.addEventListener('input', (e) => {
                updateCoinInputAndValueHtml(e.target.value, 'BIP')
            });
        } else {
            nft_changer?.classList.add('hide')
        }


    } else {
        for (let elem of wallet_please_connect) {
            elem.classList.remove('hide')
        }
        for (let elem of wallet_access_connect) {
            elem.classList.add('hide')
        }
        wallet_balance?.classList.add('hide')
        nft_changer?.classList.add('hide')

    }


    updateBIPBalanceHTML()
    update_nft_img(1,true)
    updateBIPNFTSector(BIP_NFTs)
    let BIP_input_count = document.getElementById('BIP_input_count')
    BIP_input_count.addEventListener('input', (e) => {
        updateNFTCoinInputAndValueHtml(e.target.value)
    })
}

export function updateBIPNFTSector(BIP_NFTs) {
    console.log(BIP_NFTs,BIP_NFTs_last_length)
    if(BIP_NFTs.length===BIP_NFTs_last_length){return;}
    BIP_NFTs_last_length = BIP_NFTs.length

    if (BIP_NFTs.length !== 0) {
        let wallet_nft_list = document.getElementById('wallet_nft_list')

        let i=1
        BIP_NFTs.forEach((nft) => {
            let id = `BIPNFT_${nft.index}`
            wallet_nft_list.innerHTML+=`
            <div class="flex text-lg mt-2">
            <p class="mr-2 text-down">${i}.</p>
            <p class="mr-2 text-down">${nft.metadata.name}</p>
            <input type="button" class="input_btn BIP_NFT_sale_button" id="${id}" value="Продать">
            <img src="${nft.previews[1].url}" alt="${id}" class="size-8 r-0" id="${id}" >
            </div>
            `;
            i++
        })
        document.getElementById('NFT2BIP').classList.remove('hide')
    } else {
        document.getElementById('NFT2BIP').classList.add('hide')
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
    // const nft_changer = document.getElementById('nft_changer')

    if (BIP_balance_elem) {
        BIP_balance_elem.innerHTML = Math.floor(BIP_balance * 100) / 100
        TON_balance_elem.innerHTML = Math.floor(TON_balance * 100) / 100
        USDT_balance_elem.innerHTML = Math.floor(USDT_balance * 100) / 100
        BIP_price_elem.innerHTML = Math.floor(BIP_price * 10000) / 10000

        // if (BIP_balance>0){
        //     nft_changer?.classList.remove('hide')
        // } else{
        //     nft_changer?.classList.add('hide')
        // }
    }

}


function updateNFTCoinInputAndValueHtml(value) {
    let btn_send_transaction = document.getElementById('btn_send_transaction_to_nft');
    localStorage.setItem(`BIP_input_count`, '0')

    if (!value || value <= 0) {
        if (btn_send_transaction) {
            btn_send_transaction?.classList.add('opacity-2')
            btn_send_transaction.value = 'Введите значение больше нуля'
        }
        document.getElementById(`BIP_input_count`).innerHTML = '0 BIPCoin'
        nft_payment_settings.can = false
        update_nft_img()
    } else if (isNaN(value * 1)) {
        if (btn_send_transaction) {
            btn_send_transaction.classList.add('opacity-2')
            btn_send_transaction.value = 'Некорректное значение'
        }
        document.getElementById(`BIP_input_count`).innerHTML = 'Некорректное значение'
        nft_payment_settings.can = false
        update_nft_img()
    } else {
        document.getElementById(`BIP_input_count`).innerHTML = `${value} BIPCoin`
        localStorage.setItem(`BIP_input_count`, value)
        update_nft_img(value)

        let coin_max = localStorage.getItem(`BIP_balance`)
        if (value * 1 <= coin_max) {
            if (btn_send_transaction) {
                btn_send_transaction.classList.remove('opacity-2')
                btn_send_transaction.value = `Получить NFT`
            }
            nft_payment_settings.can = true
            nft_payment_settings.amount = value

        } else {
            nft_payment_settings.can = false
            if (btn_send_transaction) {
                btn_send_transaction.classList.add('opacity-2');
                btn_send_transaction.value = `Недостаточно средств`
            }
        }
    }

    let width
    if (value.length <= 1) {
        width = `${1}rem`
    } else {
        width = `${value.length * 0.5}rem`
    }
    document.getElementById(`BIP_input_count`).style.width = width
}

function update_nft_img(bip_value = 0,preload_only=false) {
    let nft_img = document.getElementById("nft_preshow_img")
    if (bip_value <= 0) {
        nft_img.classList.add('hide')
        return
    }
    if(bip_value_last===bip_value){return;}
    let classList = new Array(nft_img.classList)
    if (classList.toString().split(' ').indexOf('hide') === -1) {
        if ((bip_value >= 10000) && (bip_value_last >= 10000)) {
            return;
        }
        if ((bip_value <= 99) && (bip_value_last <= 99)) {
            return;
        }
    }
    bip_value_last = bip_value;

    axios.get(`https://nft.biptoken.xyz/CreateItemMetadata?value=${bip_value}`, {
        responseType: "json",
        transformResponse: (body) => body
    })
        .then((res) => {
            let value = document.getElementById('wallet_nft_items').scrollHeight
            nft_img.style.height = `${value + convertRemToPixels(1) - 2}px`
            nft_img.src = JSON.parse(res.data).image
            if(!preload_only){
                nft_img.classList.remove('hide')
            }
        })
        .catch((err) => {
                console.error(`Got a bad format response with status code ${err.response.status}: ${err.response.data}`)

            }
        )
}
