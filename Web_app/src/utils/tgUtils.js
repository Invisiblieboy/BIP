import {params} from "./utils.js";
import {selectPage} from "../page/nav-bar.js";

export let tg = window.Telegram.WebApp

export function init() {
    tg.isVerticalSwipesEnabled = false
    tg.ready()
    tg.expand()
    tg.disableVerticalSwipes()
}

export function check_verif() {
    if (tg.initData.trim() === '' && !params['tg_mode']) {
        selectPage("error_tg")
        return 1
    }
    return 0
}

