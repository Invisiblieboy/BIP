import {path_to_folder} from "./utils.js";


export function preloadImages() {
    if (document.readyState !== 'complete') {
        window.addEventListener('load', () => preloadImages());
    } else {
        let normal_folder = ['arrow_down', 'arrow_up', 'bank', 'cart', 'copy', 'delete_red', 'hub', 'info', 'wallet']
        let select_folder = ['bank', 'cart', 'hub', 'info', 'wallet']

        normal_folder.forEach(img => {
            const node = new window.Image();
            node.loading = "lazy"
            node.src = `${path_to_folder}normal/${img}.png`;
        });
        select_folder.forEach(img => {
            const node = new window.Image();
            node.loading = "lazy"
            node.src = `${path_to_folder}select/${img}.png`;
        })
    }
}