import {path_to_folder} from "./utils.js";
// import {payments_settings} from "../page/cart.js";

let arrow_states = {}
export function creteArrowListener(elem) {
    let elem_arrow = document.getElementById(`${elem}_arrow`)
    let elem_content = document.getElementById(`${elem}_content`)
    arrow_states[elem] = 0

    elem_arrow.addEventListener("click", () => {
        if (arrow_states[elem]) {
            elem_arrow.src = `${path_to_folder}normal/arrow_down.png`
            elem_content.classList.add('hide')
            arrow_states[elem] = 0
        } else {
            elem_arrow.src = `${path_to_folder}normal/arrow_up.png`
            elem_content.classList.remove('hide')
            arrow_states[elem] = 1
        }
    })
}