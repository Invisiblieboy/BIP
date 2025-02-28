import {refreshPage} from "../index.js";
import {check_verif} from "../utils/tgUtils.js";

export let current_page = "info"

const pageNamesData = {
    "info": "info",
    "wallet": "account_balance_wallet",
    "cart": "shopping_cart",
    "book": "import_contacts",
}
export let folders = Object.keys(pageNamesData)

export function selectRight() {
    let i = folders.indexOf(current_page) + 1
    if (i < folders.length) {
        selectPage(folders[i])
    }
}

export function selectLeft() {
    let i = folders.indexOf(current_page) - 1
    if (i >= 0) {
        selectPage(folders[i])
    }
}

export function selectPage(page) {
    if (!check_verif() && folders.indexOf(page) !== -1) {
        let last_page = document.getElementById('btn-'.concat(current_page))
        last_page.classList.remove('gold')
        last_page.classList.add('gold-dark')

        current_page = page
        refreshPage()

        let now_page = document.getElementById('btn-'.concat(page))
        now_page.classList.remove('gold-dark')
        now_page.classList.add('gold')
    }
}


export function init() {
    const root = document.getElementById('bottom-navigation')
    folders.forEach((name) => {
        let id = 'btn-'.concat(name);

        root.insertAdjacentHTML("beforeend", `
            <div id="${id}" class="nav-img gold-dark">
                    <span class="material-symbols-outlined" >${pageNamesData[name]}</span>
            </div>`)

        document.querySelector("#" + id).addEventListener('click', () => {
            selectPage(name)
        })
    })
    selectPage(current_page)
}


