import {path_to_folder} from "./utils.js";

export const page_info = `
    <div id="info">
        <div class="message-cloud p-4">
            <p class="text-center text-sm text-hint mt-1">
                <span class="gold font-bold text-3xl m-0 ml-4">BIPCoin</span> - первая цифровая монета, привязанная к экономической деятельности реальной компании.</p>
        </div>
        <div class="message-cloud mt-4">
            <p class="p-2 text-base text-center m-0"><span class="gold font-bold text-lg link-biptoken site-link">BIP Token</span> - главный канал токена. Там публикуются самые свежие новости о BIP.</p>
            
            <p class="p-2 text-base text-center m-0"><span class="gold font-bold text-lg link-bipizm site-link">Бипизм</span> - чат для обсуждения любых событий.</p>
        </div>
        <div class="message-cloud mt-4">
            <p class="p-2 text-base text-center m-0"><span class="gold font-bold text-lg link-baltinvestproject site-link">Архитектура и Проектирование</span> - канал, посвященный компании ООО "БИП".</p>
            
            <p class="p-2 text-base text-center m-0 mt-1"><span class="gold font-bold text-lg link-biplions site-link">Баскетбол | BIP LIONS</span> - наша баскетбольная команда.</p>
        </div>
    </div>
    `

export const page_wallet = `
    <div id="wallet">
        <div class="message-cloud p-4">
            <p class="text-center mt-1 gold font-bold text-3xl m-0">
                Кошелек
            </p>
        </div>
        <div class="flex mt-4">
            <div class="message-cloud p-4 flex" id="wallet-access-connect">
                <p class="green text-base">Привязан</p>
                <img class="size-6 wallet-disconnect" src="${path_to_folder}normal/delete_red.png" alt="">
            </div>
            <div class="message-cloud p-4" id="wallet-please-connect">
                <p class="wallet-connect site-link gold text-lg" >Подключить кошелек</p>
            </div>
            <div class="message-cloud p-4">
                <p class="inline">Цена BIPCoin - <span id="BIP_price" class="gold">0</span>$</p>
            </div>
        </div>
        
        <div class="mt-4" id="wallet_balance">
          
            <div class="message-cloud p-4 ">
                <p class="text-2xl">Баланс</p>
                <p class="text-lg"><span id="BIP_balance" class="gold">NONE</span> BIPCoin</p>
                <p class="text-lg"><span id="TON_balance" class="gold">NONE</span> TON</p>
                <p class="text-lg"><span id="USDT_balance" class="gold">NONE</span> USDT</p>
            </div>
        </div>
    </div>
`

export const page_cart = `
    <div id="cart">
        <div class="message-cloud p-4">
            <p class="text-3xl gold font-bold text-center m-0">Купить у авторов</p>
        </div>
        <div class="message-cloud p-2 test mt-4">
            <div class="flex">
                <p class="text-lg m-0 gold font-bold">Переводом на криптокошлек</p>
                <img class="size-8 send-to-wallet" src="${path_to_folder}normal/arrow_down.png" id="cart_crypto_arrow" alt="">
            </div>
            <div class="pl-4 pr-4">
                <p class="text-sm m-0 text-hint">USDT или TON</p>
                <div class="mt-4 hide" id="send_to_crypto_content">
                </div>
            </div>
        </div>
        
        <div class="message-cloud p-2">
            <div class="flex">
                <p class="text-lg m-0 gold font-bold">Переводом на карту</p>
                <img class="size-8 send-to-card" src="${path_to_folder}normal/arrow_down.png" id="cart_card_arrow" alt="">
            </div>
            <div class="pl-4 pr-4">
                <p class="text-sm m-0 text-hint ">ожидание до 12 часов</p>
                <div class="mt-4 hide" id="send_to_card_content">
                </div>
            </div>
        </div>
        <div class="message-cloud p-2">
            <p class="text-lg m-0 gold font-bold">СБП</p>
            <p class="text-sm m-0 text-hint pl-4">в разработке</p>
        </div>
    </div>
    `
export const page_bank = `
    <div id="hub">
        <div class="message-cloud p-4">
            <p class="text-3xl gold font-bold text-center m-0">Обучения по покупке</p>
            <p class="text-sm text-hint text-center m-0">если есть:</p>
        </div>
        <div class="text-base font-bold gold flex message-cloud mt-4">
            <div class="message-cloud p-4 m-a bg-grey mt-2">
                <p class="site-link link-how-buy-usdt-on-wallet m-0">USDT на криптокошельке в сети TON.</p>
            </div>
            <div class="message-cloud p-4 m-a bg-grey mt-2">
                <p class="site-link link-how-buy-usdt-on-CEX m-0">USDT на криптобирже.</p>
            </div>
            <div class="message-cloud p-4 m-a bg-grey mt-2">
                <p class="site-link link-how-buy-verif-on-CEX m-0">RUB и верификация на криптобирже.</p>
            </div>
            <div class="message-cloud p-4 m-a bg-grey mt-2 mb-2">
                <p class="site-link link-how-buy-rub m-0">RUB и желание купить)</p>
            </div>
        </div>
    </div>`

export const page_error_tg =`
    <div id = "error-tg">
        <br>
        <div class="message-cloud mt-8">
            <p class="p-4 text-3xl font-bold text-center">Больше информации в нашем <span class="site-link link-tgbot gold">Telegram-боте</span>.</p>
        </div>
    </div>`

export const page_send_to_crypto_content =`
    <div class="flex">
        <input class="input_number" id="TON_input_count" placeholder="0" type="text">
        <p class="text-lg ml-2">TON</p>
        <p class="ml-2 mr-2 text-lg">&nbsp&nbsp=</p>
        <p class="text-lg" id="TON_value">0 BIPCoin</p>
    </div>
    <div class="flex">
        <input class="input_number" id="USDT_input_count" placeholder="0" type="text">
        <p class="text-lg ml-2">USDT</p>
        <p class="ml-2 mr-2 text-lg">=</p>
        <p class="text-lg" id="USDT_value">0 BIPCoin</p>
    </div>
    <input type="button" class="input_btn text-base w-100 mt-4 opacity-2" id="btn_send_transaction" value="Введите значение больше нуля">
`
export const page_send_to_card_content =`
    <div class="flex">
        <input class="input_number" id="RUB_input_count" placeholder="0" type="text">
        <p class="text-lg ml-2">RUB</p>
        <p class="ml-2 mr-2 text-lg">=</p>
        <p class="text-lg" id="RUB_value">0 BIPCoin</p>
    </div>
    <p class="text-base text-hint mt-2">Переведите сумму до 50к рублей на карту:</p>
    <p class="text-lg inline" id="admin_card_number">1234-5678-9012-3456</p>
    <img class="size-5" src="${path_to_folder}normal/copy.png" id="copy_admin_card_number" alt="">

    <p class="text-base text-hint mt-2">Обязательно укажите код в коментарии:</p>
    <p class="text-lg inline" id = 'card_send_code'>1234567890</p>
    <img class="size-5" src="${path_to_folder}normal/copy.png" id="copy_card_send_code" alt="">
    
`
export const page_error_connect_wallet = `
    <div id="error_connect_wallet">
        <p class="text-2xl">Сначала подключите <span class="gold site-link btn_page_wallet">кошелек</span></p>
    </div>`
