import {creteArrowListener} from "../utils/utils.js";


export function infoInit() {
    creteArrowListener('faq')
    creteArrowListener('faq_get_bip')
    creteArrowListener('faq_why_we_work')
    creteArrowListener('faq_how_bip_work')
    creteArrowListener('faq_how_much_pay')
    creteArrowListener('faq_details')

    const faq_open_arrow = document.getElementById('faq_arrow')
    const faq_box = document.getElementById('faq')
    let faq_arrow_state = 0
    faq_open_arrow.addEventListener("click", () => {
        if (faq_arrow_state) {
            faq_box.classList.add('inline')
            faq_arrow_state = 0
        } else {
            faq_box.classList.remove('inline')
            faq_arrow_state = 1

        }
    })
}