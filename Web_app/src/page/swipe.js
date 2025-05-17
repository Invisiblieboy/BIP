import {selectLeft, selectRight} from "./nav-bar.js";

let xDown1 = null, yDown1 = null;

export function swipeInit() {
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            selectRight()
        }
        if (e.key === 'ArrowLeft') {
            selectLeft()
        }
    })
}

function handleTouchStart(evt) {
    xDown1 = evt.touches[0].clientX
    yDown1 = evt.touches[0].clientY
}

function handleTouchMove(evt) {
    if (!xDown1) {
        return;
    }
    const clientX = evt.touches[0].clientX;
    const clientY = evt.touches[0].clientY;
    const xDiff = xDown1 - clientX;
    const yDiff = yDown1 - clientY;

    if (Math.abs(xDiff) > window.screen.width / 5) {
        if (xDiff > 0) {
            selectRight()
        } else if (xDiff < 0) {
            selectLeft()
        }
        xDown1 = yDown1 = null;
    }
}
