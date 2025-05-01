import {page_book, page_cart, page_error_tg, page_info, page_nft, page_wallet} from './page/templates.js'
import {current_page, init as navInit} from "./page/nav-bar.js";
import {parse_url, utilsInit} from "./utils/utils.js";
import {check_verif} from "./utils/tgUtils.js";
import {cartInit} from "./page/cart.js";
import {walletInit} from "./page/wallet.js";
import {linksInit} from "./utils/links_handler.js";
import {infoInit} from "./page/info.js";

const $page = document.querySelector('#page')

export function refreshPage() {
    if (current_page === 'info') {
        $page.innerHTML = page_info
        infoInit()
    } else if (current_page === 'wallet') {
        $page.innerHTML = page_wallet
        walletInit()
    } else if (current_page === 'nft') {
        $page.innerHTML = page_nft
        // walletInit()
    } else if (current_page === 'cart') {
        $page.innerHTML = page_cart
        cartInit()
    } else if (current_page === 'book') {
        $page.innerHTML = page_book
    } else if (current_page === 'error_tg') {
        $page.innerHTML = page_info + page_error_tg
        infoInit()
    }
}

async function main() {
    parse_url()
    await linksInit()
    if (!check_verif()) {
        await utilsInit()
        navInit()

        refreshPage()
    }
}

(async () => {
    document.addEventListener('DOMContentLoaded', async () => main());
})()
