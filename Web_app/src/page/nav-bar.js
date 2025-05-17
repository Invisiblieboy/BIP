import {refreshPage} from "../index.js";

export let current_page = "info"
export let folders

const pageNamesData = {
    "info": "info",
    "wallet": "account_balance_wallet",
    "nft": "savings",
    "cart": "shopping_cart",
    "book": "import_contacts",
}

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
    let last_page = document.getElementById('btn-'.concat(current_page))
    last_page?.classList.remove('gold')
    last_page?.classList.add('gold-dark')

    current_page = page
    refreshPage()

    let now_page = document.getElementById('btn-'.concat(page))
    now_page?.classList.remove('gold-dark')
    now_page?.classList.add('gold')

}


export function navInit(names = {...pageNamesData}) {
    // if (!(params.beta === 'true' || tg?.initDataUnsafe?.user?.id === 1447179490)) {
    //     delete names.nft
    // }
    if (!localStorage.getItem('wallet_address')) {
        delete names.nft
    }
    folders = Object.keys(names)

    const root = document.getElementById('bottom-navigation')
    root.innerHTML = ''
    folders.forEach((name) => {
        let id = 'btn-'.concat(name);
        root.insertAdjacentHTML("beforeend", `
            <div id="${id}" class="nav-img gold-dark" style="width: ${100 / folders.length}%">
                    <span class="material-symbols-outlined" >${names[name]}</span>

            </div>`)
        document.querySelector("#" + id).addEventListener('click', () => {
            selectPage(name)
        })
    })
    selectPage(current_page)
}


