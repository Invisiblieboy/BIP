import {selectPage} from "../index.js";
import {path_to_folder} from "../utils/utils.js";
import {check_verif} from "../utils/tgUtils.js";

export let folders = ['info', 'wallet', 'cart', 'bank']
export let current_page = "info"



export function selectRight() {
    let i = folders.indexOf(current_page) + 1
    if (i<folders.length){
        selectPage(folders[i])
    }
}
export function selectLeft() {
    let i = folders.indexOf(current_page) - 1
    if (i>=0){
        selectPage(folders[i])
    }
}

export function setCurrentPage(value) {
    current_page = value
}

function getHtmlImg(name, type = 'normal') {
    if (type === 'normal') {
        return `<img src=${path_to_folder + 'normal/' + name + ".png"} alt="">`
    }
    if (type === 'select') {
        return `<img src=${path_to_folder + 'select/' + name + ".png"} alt="">`
    }
}

function downloadImages() {
    folders.forEach((folder) => {
        localStorage.setItem(`img_${folder}_normal`, `<img src=${path_to_folder + folder + ".png"} alt="">`)
        localStorage.setItem(`img_${folder}_select`, `<img src=${path_to_folder + 'select/' + folder + ".png"} alt="">`)
    })
}

export function setUnselect() {
    if (check_verif()){
        return;
    }
    folders.forEach((name) => {
        let id = 'btn-'.concat(name);
        let open_box = document.querySelector("#" + id)
        open_box.innerHTML = getHtmlImg(name)
    })
}

export function selectImg(name) {
    if (check_verif()){
        return;
    }
    const temp = document.querySelector('#btn-' + name)
    temp.innerHTML = getHtmlImg(name, 'select')
}

export function init() {
    const $root = document.querySelector('#bottom-navigation')
    folders.forEach((name) => {
        let id = 'btn-'.concat(name);

        $root.insertAdjacentHTML("beforeend", `
            <div id="${id}" class="nav-img">
                ${getHtmlImg(name)}
            </div>`)

        let open_box = document.querySelector("#" + id)
        open_box.addEventListener('click', () => {
            selectPage(name)
        })
    })

    // downloadImages()
    selectImg(current_page)
}


