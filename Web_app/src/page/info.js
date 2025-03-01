import {creteArrowListener} from "../utils/utils.js";


export function infoInit() {
    creteArrowListener('faq')
    creteArrowListener('faq_get_bip')
    creteArrowListener('faq_why_we_work')
    creteArrowListener('faq_how_bip_work')
    creteArrowListener('faq_how_much_pay')
    creteArrowListener('faq_details')

    document.getElementById('faq_arrow').addEventListener("click", () => {
        document.getElementById('faq').classList.toggle('inline')
    })
}