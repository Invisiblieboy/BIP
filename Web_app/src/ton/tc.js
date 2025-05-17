import {walletInit} from "../page/wallet.js";
import {params, updatePriceAndBalance} from "../utils/utils.js";
import {tg} from "../utils/tgUtils.js";
import {navInit} from "../page/nav-bar.js";

export const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://static.biptoken.xyz/MANIFEST.json',
    buttonRootId: 'ton-connect',
    enableAndroidBackHandler: true
});

tonConnectUI.uiOptions = {
    twaReturnUrl: 'https://t.me/BIPapp_bot',
    language: 'ru',
    uiPreferences: {
        theme: 'SYSTEM'
    }
};

const unsubscribe = tonConnectUI.onStatusChange(
        walletAndwalletInfo => {
            if (tonConnectUI.connected) {
                const address = tonConnectUI.account.address;
                localStorage.setItem('wallet_address', address)
                if (!params['tg_mode']) {
                    axios.post(`https://api.biptoken.xyz/v1/auth/nuw?wallet_address=${address}&tgInitData=${encodeURIComponent(tg.initData)}`)
                }
            } else {
                localStorage.setItem('wallet_address', '')
            }
            localStorage.setItem('wallet_connect', tonConnectUI.connected)
            updatePriceAndBalance()
            walletInit()
            navInit()
        }
    )
;


export async function connectWallet() {
    try {
        await tonConnectUI.openModal();
    } catch (e) {
        console.log('Invalid connect wallet')
    }
    navInit()
}

export async function disconnectWallet() {
    await tonConnectUI.disconnect()
    navInit()
}

