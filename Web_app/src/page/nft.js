import {BIP_NFTs, convertRemToPixels, is_mobile} from "../utils/utils.js";
import {updateCoinInputAndValueHtml} from "./cart.js";
import {nft_payment_settings} from "./wallet.js";

let bip_value_last = 0;

export function nftInit() {

    if (Number(localStorage.getItem('BIP_balance')) > 0) {

        let usdt_input = document.getElementById('BIP_input_count');
        usdt_input?.addEventListener('input', (e) => {
            updateCoinInputAndValueHtml(e.target.value, 'BIP')
        });
        if (!is_mobile && usdt_input) {
            usdt_input.type = 'text'
        }
    }

    // preload_nft_img([100, 1000, 10000, 1])
    updateBIPChangerHTML()

}

export function updateBIPChangerHTML() {
    try {
        if (localStorage.getItem('BIP_balance') > 0) {
            document.getElementById('BIP_input_count')?.addEventListener('input', (e) => {
                updateNFTCoinInputAndValueHtml(e.target.value)
            })
            document.getElementById("changer_BIP2NFT")?.classList.remove('hide')
        } else {
            document.getElementById("changer_BIP2NFT")?.classList.add('hide')
        }


        if (BIP_NFTs.length !== 0) {
            let wallet_nft_list = document.getElementById('wallet_nft_list')

            let i = 1
            let wallet_nft_list_nuw = ``
            BIP_NFTs.forEach((nft) => {
                let name = nft.metadata.name
                if (name === 'BIP NFT') {
                    name = nft.metadata.attributes[0].value.toString() + ' ' + name
                }


                let id = `BIPNFT_${nft.index}`
                wallet_nft_list_nuw += `
            <div class="flex text-lg mt-2">
            <p class="mr-2 text-down">${i}.</p>
            <p class="mr-2 text-down">${name}</p>
            <input type="button" class="input_btn BIP_NFT_sale_button" id="${id}" value="Продать">
            <img src="${nft.previews[1].url}" alt="${id}" class="size-8 r-0" id="${id}" >
            </div>
            `;
                i++
            })
            if (wallet_nft_list && wallet_nft_list?.innerHTML !== wallet_nft_list_nuw) {
                wallet_nft_list.innerHTML = wallet_nft_list_nuw
            }

            document.getElementById('changer_NFT2BIP')?.classList.remove('hide')
        } else {
            document.getElementById('changer_NFT2BIP')?.classList.add('hide')
        }
    } catch (e) {
        console.log(e)
        setTimeout(updateBIPChangerHTML, 500)
    }

}

function preload_nft_img(bip_value) {
    if (typeof bip_value === 'object') {
        for (const element of bip_value) {
            preload_nft_img(element)
        }
        return;
    }
    axios.get(`https://nft.biptoken.xyz/CreateItemMetadata?value=${bip_value}`, {
        responseType: "json",
        transformResponse: (body) => body
    }).then((res) => {
        axios.get(JSON.parse(res.data).image)

        let nft_img = document.getElementById("nft_preshow_img")
        if (nft_img) {
            nft_img.src = JSON.parse(res.data).image
        }
    })
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

function update_nft_img(bip_value = 0) {

    let nft_img = document.getElementById("nft_preshow_img")
    if (bip_value <= 0) {
        nft_img.classList.add('hide')
        return
    }
    if (bip_value_last === bip_value) {
        return;
    }
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
            let link = JSON.parse(res.data).image
            if (link !== nft_img.src) {
                nft_img.src = link
            }
            nft_img.classList.remove('hide')

        })
        .catch((err) => {
                console.error(`Got a bad format response with status code ${err.response.status}: ${err.response.data}`)
            }
        )
}