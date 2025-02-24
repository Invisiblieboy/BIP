import {selectPage} from "../index.js";
import {selectImg, setUnselect} from "../page/nav-bar.js";
import {connectWallet, disconnectWallet} from "../ton/tc.js";
import {payments_settings} from "../page/cart.js";
import {NFTTransfer, sendTransaction} from "../ton/ton.js";
import {nft_payment_settings} from "../page/wallet.js";
import {BIP_NFTs} from "./utils.js";

export async function buttonsInit() {
    document.addEventListener("click", async function (e) {
        if (e.target?.className.includes("btn_page_wallet")) {
            selectPage('wallet')
            setUnselect()
            selectImg('wallet')
        }
        if (e.target?.className.includes("btn_wallet_connect")) {
            await connectWallet()
        }
        if (e.target?.className.includes("btn_wallet_disconnect")) {
            await disconnectWallet()
        }
        if (e.target?.id === "btn_send_transaction") {
            if (payments_settings.can) {
                if (await sendTransaction(payments_settings.token, payments_settings.amount)) {
                    document.getElementById('btn_send_transaction').value = 'Транзакция обрабатывается'
                } else {
                    document.getElementById('btn_send_transaction').value = 'Ошибка при отправке транзакции'
                }
            }
        }
        if (e.target?.id === "btn_send_transaction_to_nft") {
            if (nft_payment_settings.can) {
                if (await sendTransaction("BIP", nft_payment_settings.amount)) {
                    document.getElementById('btn_send_transaction_to_nft').value = 'Транзакция обрабатывается'
                } else {
                    document.getElementById('btn_send_transaction_to_nft').value = 'Ошибка при отправке транзакции'
                }
            }
        }
        if (e.target?.id === "copy_admin_card_number") {
            let elem = document.getElementById('admin_card_number')
            elem.classList.add('anim')
            setTimeout(() => elem.classList.remove('anim'), 1000)
            await navigator.clipboard.writeText(elem.innerHTML)
        }
        if (e.target?.id === "copy_card_send_code") {
            let elem = document.getElementById('card_send_code')
            elem.classList.add('anim')
            setTimeout(() => elem.classList.remove('anim'), 1000)
            await navigator.clipboard.writeText(elem.innerHTML)
        }
        if (e.target?.classList.toString().split(' ').indexOf("BIP_NFT_sale_button")!==-1) {
            for (const nft of BIP_NFTs) {
                if(nft.index.toString()===e.target.id.split('_')[1]){
                    console.log(nft.address)
                    console.log(BIP_NFTs)
                    await NFTTransfer(nft.address)
                }
            }
        }
    })
}