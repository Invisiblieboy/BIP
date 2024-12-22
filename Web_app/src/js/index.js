import {page_bank, page_cart, page_error_tg, page_info, page_wallet} from './utils/templates.js'
import {current_page, init as navInit, selectImg, setCurrentPage, setUnselect} from "./page/nav-bar.js";
import {preInit, utilsInit} from "./utils/utils.js";
import {check_verif, init as tgInit} from "./utils/tgUtils.js";
import {cartInit} from "./page/cart.js";
import {walletInit} from "./page/wallet.js";
import {swipeInit} from "./utils/swipe.js";

const $page = document.querySelector('#page')


export function selectPage(page) {
    if (current_page !== page) {
        setCurrentPage(page)
        refreshPage()
        setUnselect()
        selectImg(page)
    }
}

function refreshPage() {
    if (current_page === 'info') {
        $page.innerHTML = page_info
    } else if (current_page === 'wallet') {
        $page.innerHTML = page_wallet
        walletInit()
    } else if (current_page === 'cart') {
        $page.innerHTML = page_cart
        cartInit()
    } else if (current_page === 'bank') {
        $page.innerHTML = page_bank
    } else if (current_page === 'error_tg') {
        $page.innerHTML = page_info + page_error_tg
    }
}

async function main() {
    await preInit()
    if (!check_verif()) {
        utilsInit()
        navInit()

        refreshPage()
        tgInit()
        swipeInit()
    }
}

document.addEventListener('DOMContentLoaded', async () => main());
