export async function linksInit() {
    document.addEventListener("click", async function (e) {
        if (e.target?.className.includes("link-biptoken")) {
            window.open("https://t.me/BIPholders", "_blank")
        }
        if (e.target?.className.includes("link-tg-how-to-buy")) {
            window.open("https://t.me/BIPholders/6", "_blank")
        }
        if (e.target?.className.includes("link-bipizm")) {
            window.open("https://t.me/BIPuserchat", "_blank")
        }
        if (e.target?.className.includes("link-biplions")) {
            window.open("https://t.me/biplions1", "_blank")
        }
        if (e.target?.className.includes("link-tgbot")) {
            window.open("https://t.me/BIPapp_bot?start=app", "_blank")
        }
        if (e.target?.className.includes("link-baltinvestproject")) {
            window.open("https://t.me/BaltInvestProekt", "_blank")
        }
        if (e.target?.className.includes("link-how-buy-usdt-on-wallet")) {
            window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-ili-lyuboj-drugoj-token-12-04", "_blank")
        }
        if (e.target?.className.includes("link-how-buy-usdt-on-CEX")) {
            window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-na-Birzhe-12-04", "_blank")
        }
        if (e.target?.className.includes("link-how-buy-verif-on-CEX")) {
            window.open("https://telegra.ph/Kak-kupit-BIP-imeya-verifikaciyu-na-Birzhe-12-04", "_blank")
        }
        if (e.target?.className.includes("link-how-buy-rub")) {
            window.open("https://telegra.ph/Kak-kupit-BIP-imeya-RUB-12-04", "_blank")
        }
        if (e.target?.className.includes("link-how-create-tk")) {
            window.open("https://telegra.ph/Kak-sozdat-svoj-koshelek-Tonkeeper-12-16", "_blank")
        }
        if (e.target?.className.includes("link-baltinvestpro-stats")) {
            window.open("https://www.rusprofile.ru/id/4405609", "_blank")
        }
    })
}