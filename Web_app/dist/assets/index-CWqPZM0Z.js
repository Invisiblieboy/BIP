(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const $=`
    <div id="error_connect_wallet">
        <p class="text-lg">Сначала подключите <span class="gold site-link btn_page_wallet">кошелек</span></p>
    </div>`,H=`
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
        <div class="message-cloud inline p-2 text-sm" id="faq">
            <div class="flex">
                <p class="text-lg">FAQ</p>
                <span class="size-8 material-symbols-outlined" id="faq_arrow">keyboard_arrow_down</span>
            </div>
            <div class="hide mt-3" id="faq_content">
                <div class="flex mt-1 mb-1">
                    <p class="text-lg gold">Как BIPCoin работает?</p>
                    <span class="size-8 material-symbols-outlined" id="faq_how_bip_work_arrow">keyboard_arrow_down</span>
                </div>
                <div class="hide ml-4 mt-1" id="faq_how_bip_work_content">
                    <p>
                    Количество имеющихся у Вас BIPCoin обеспечивает Вам пропорциональное получение доли прибыли от деятельности <span class="link-baltinvestpro-stats site-link gold">компании</span> по итогам каждого квартала.                    
                    </p>
                </div>
            
                <div class="flex mt-1 mb-1">
                    <p class="text-lg gold">Как можно получить BIPCoin?</p>
                    <span class="size-8 material-symbols-outlined" id="faq_get_bip_arrow">keyboard_arrow_down</span>
                </div>
                <div class="hide ml-4 mt-1" id="faq_get_bip_content">
                    <p>
                         ⁃ Купить одним из доступных <span class="link-tg-how-to-buy site-link gold">способов</span><br>
                         ⁃ Получить за участие в проводимых нами акциях или конкурсах<br>
                         ⁃ После листинга купить на бирже<br>
                         ⁃ Устроится на работу в нашу компанию<br>
                         ⁃ Следить за нашими <span class="link-biptoken site-link gold">объявлениями и публикациями</span> и, возможно, Вам повезет :)<br>
                    </p>
                </div>
            
                <div class="flex mt-1 mb-1">
                    <p class="text-lg gold">Как понять, сколько заплатят?</p>
                    <span class="size-8 material-symbols-outlined" id="faq_how_much_pay_arrow">keyboard_arrow_down</span>
                </div>
                <div class="hide ml-4 mt-1" id="faq_how_much_pay_content">
                    <p>
                    Предположим, что чистая прибыль компании, после уплаты всех налогов и сборов, составила 100 000 USD. Всего создано 1 млн BIPCoin, значит выплата на каждую монету составит 0,1 USDT.<br>
                    Если у Вас, например, 10 000 монет, то поступление на ваш кошелек составит 1000 USDT.<br>
                    Расчеты:  выручка компании / количество BIPCoin (1,000,000шт) * количество BIPCoin у вас = Ваша прибыль
                    </p>
                </div>
                
                <div class="flex mt-1 mb-1">
                    <p class="text-lg gold">Зачем мы это делаем?</p>
                    <span class="size-8 material-symbols-outlined" id="faq_why_we_work_arrow">keyboard_arrow_down</span>
                </div>
                <div class="hide ml-4 mt-1" id="faq_why_we_work_content">
                    <p>
                    Для дальнейшего роста и расширения <span class="link-baltinvestpro-stats site-link gold">компании</span> нам необходимо привлечение средств. В связи с крайне высокой ставкой рефинансирования, стандартные банковские инструменты становятся неактуальны, и мы решили привлечь средства частных инвесторов.
                    </p>
                </div>
                
                <div class="flex mt-1 mb-1">
                    <p class="text-lg gold">Различные детали</p>
                    <span class="size-8 material-symbols-outlined" id="faq_details_arrow">keyboard_arrow_down</span>
                </div>
                <div class="hide ml-4 mt-1" id="faq_details_content">
                    <p>
                     Экономические данные по деятельности компании публикуются налоговыми органами и легко находятся в сети.<br>
                     Однако, данные, отображаемые в налоговой декларации (а именно чистая прибыль компании), не учитывают:<br>
                      - затраты на перевод денежных средств в цифровые валюты<br>
                      - налоговые отчисления при выводе прибыли со счета компании<br>
                      - затраты на транзакции при переводах на кошельки<br>
                      - возможные изменения в законодательстве и некоторые другие расходы.<br>
                      <br>
                      Бухгалтерские данные рассчитываются до конца месяца, следующего за отчетным!<br>
                      То есть, данные за первый квартал (январь, февраль, март) определяются до конца апреля, а выплаты будут производиться в мае, так как требуется время на обработку данных по кошелькам и перевод денежных средств в цифровую валюту.<br>
                      В аналогичном порядке начисления за второй квартал (апрель, май, июнь), будут перечислены в августе и так далее.
                     </p>
                </div>
                
            </div>
        </div>
    </div>
    `,J=`
    <div id="wallet">
        <div class="message-cloud p-4">
            <p class="text-3xl gold font-bold text-center m-0">
            Кошелек
            </p>
        </div>
        <div id="wallet_info" class="flex mt-4">
            <div class="message-cloud btn_wallet_disconnect p-4 wallet_access_connect flex hide ">
                <p class="green text-lg btn_wallet_disconnect">Привязан</p>
                <span class="size-7 red material-symbols-outlined btn_wallet_disconnect">delete</span>
            </div>
            <div class="message-cloud wallet_please_connect p-4">
                <p class="btn_wallet_connect site-link gold text-lg" >Подключить кошелек</p>
            </div>
            <div class="message-cloud wallet_please_connect p-4">
                <p class="site-link link-how-create-tk text-lg gold">Как создать?</p>
            </div>
            <div class="message-cloud text-lg p-4 pl-2 pr-2">
                <p class="inline">Цена BIPCoin - <span id="BIP_price" class="gold">0</span>$</p>
            </div>
        </div>
        <div id="wallet_balance" class="mt-4 wallet_access_connect hide">
            <div class="message-cloud p-4">
                <p class="text-2xl">Баланс</p>
                <p class="text-lg"><span id="BIP_balance" class="gold">NONE</span> BIPCoin</p>
                <p class="text-lg"><span id="TON_balance" class="gold">NONE</span> TON</p>
                <p class="text-lg"><span id="USDT_balance" class="gold">NONE</span> USDT</p>
            </div>
        </div>
        <div id="server_wallet_balance" class="permanent-hide">
            <div class="message-cloud p-4">
                <p>Баланс на сервере:</p>
                <p id="sw_balance_elem">0</p>
            </div>
        </div>
        <div class="hide wallet_access_connect" id="nft_changer">
            <div id="changer_BIP2NFT" class="message-cloud p-4 hide mt-4">    
                <p class="text-2xl">Конвертация BIPCoin в NFT</p>
                <div class="flex ml-2">
                    <div class="mt-4" id="wallet_nft_items">
                        <div class="flex">
                            <input class="input_number" id="BIP_input_count" placeholder="0" type="number">
                            <p class="text-lg ml-2">BIPCoin</p>
                        </div>
                        <input type="button" class="input_btn opacity-2 mt-1" id="btn_send_transaction_to_nft" value="Введите значение больше нуля">
                    </div>
                    <img src="" class="img-border r-0 hide" id="nft_preshow_img" alt="nft image">
                </div>
            </div>
            <div id="changer_NFT2BIP" class="message-cloud p-4 hide">    
                <div id="wallet_nft" class="">
                    <p class="text-2xl">Конвертация NFT в BIPCoin</p>
                    <div class="ml-2 mt-2" id="wallet_nft_list">
                    </div>
                </div>
            </div>
            
        </div>
    </div>
`,Y=`
    <div id="nft">
        <span class="material-symbols-outlined">savings</span>
    </div>
`,G=`
    <div id="cart">
        <div class="message-cloud p-4">
            <p class="text-3xl gold font-bold text-center m-0">Купить у авторов</p>
        </div>
        <div class="message-cloud p-2 test mt-4">
            <div class="flex">
                <p class="text-lg m-0 gold font-bold">Переводом на криптокошлек</p>
                <span class="size-8 send-to-wallet material-symbols-outlined" id="send_to_crypto_arrow">keyboard_arrow_down</span>
            </div>
            <div class="pl-4 pr-4">
                <p class="text-sm m-0 text-hint">USDT или TON</p>
                <div class="mt-4 hide" id="send_to_crypto_content">
                    <div class="flex">
                        <input class="input_number" id="TON_input_count" placeholder="0" type="number">
                        <p class="text-lg ml-2">TON</p>
                        <p class="ml-2 mr-2 text-lg">&nbsp&nbsp=</p>
                        <p class="text-lg" id="TON_value">0 BIPCoin</p>
                    </div>
                    <div class="flex">
                        <input class="input_number" id="USDT_input_count" placeholder="0" type="number">
                        <p class="text-lg ml-2">USDT</p>
                        <p class="ml-2 mr-2 text-lg">=</p>
                        <p class="text-lg" id="USDT_value">0 BIPCoin</p>
                    </div>
                    <input type="button" class="input_btn text-base w-100 mt-4 opacity-2" id="btn_send_transaction" value="Введите значение больше нуля">
                </div>
            </div>
        </div>
        
        <div class="message-cloud p-2">
            <div class="flex">
                <p class="text-lg m-0 gold font-bold">Переводом на карту</p>
                <span class="size-8 send-to-card material-symbols-outlined" id="send_to_card_arrow">keyboard_arrow_down</span>
            </div>
            <div class="pl-4 pr-4">
                <p class="text-sm m-0 text-hint ">ожидание до 12 часов</p>
                <div class="mt-4 hide" id="send_to_card_content">
                    <div class="flex">
                        <input class="input_number" id="RUB_input_count" placeholder="0" type="number">
                        <p class="text-lg ml-2">RUB</p>
                        <p class="ml-2 mr-2 text-lg">=</p>
                        <p class="text-lg" id="RUB_value">0 BIPCoin</p>
                    </div>
                    <p class="text-base text-hint mt-2">Переведите сумму до 50к рублей на карту:</p>
                    <div class="flex">
                        <p class="text-lg" id="admin_card_number">1234-5678-9012-3456</p>
                        <span class="ml-2 size-6 material-symbols-outlined" id="copy_admin_card_number">content_copy</span>
                    </div>
                    <p class="text-base text-hint mt-2">Обязательно укажите код в коментарии:</p>
                    <div class="flex">
                        <p class="text-lg" id = 'card_send_code'>1234567890</p>
                        <span class="ml-2 size-6 material-symbols-outlined" id="copy_card_send_code">content_copy</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="message-cloud p-2">
            <p class="text-lg m-0 gold font-bold">СБП</p>
            <p class="text-sm m-0 text-hint pl-4">в разработке</p>
        </div>
    </div>
    `,Q=`
    <div id="hub">
        <div class="message-cloud p-4">
            <p class="text-3xl gold font-bold text-center m-0">Обучение</p>
        </div>
        <div class="text-base message-cloud mt-4">
            <p class="text-2xl p-2">Как купить BIPCoin если есть:</p>
            <div class="p-4 pt-2 gold">
                <p class="site-link-lite inline link-how-buy-usdt-on-wallet">- USDT на криптокошельке в сети TON.</p><br>
                <p class="site-link-lite inline pt-1 link-how-buy-usdt-on-CEX">- USDT на криптобирже.</p><br>
                <p class="site-link-lite inline pt-1 link-how-buy-verif-on-CEX">- RUB и верификация на криптобирже.</p><br>
                <p class="site-link-lite inline pt-1 link-how-buy-rub">- RUB и желание купить)</p><br>
            </div>
        </div>
        <div class="text-base message-cloud mt-4">
            <p class="text-2xl p-2">Как создать:</p>
            <div class="p-4 pt-2 gold">
                <p class="site-link-lite inline link-how-create-tk">- Криптовалютный кошелек.</p><br>
            </div>
        </div>
        <div class="text-base message-cloud mt-4">
            <div class="p-4 pt-2 gold">
                <p class="text-2xl site-link-lite inline link-how-sell-rub">Как продать BIPCoin</p><br>
            </div>
        </div>
    </div>`,Z=`
    <div id = "error-tg">
        <br>
        <div class="message-cloud mt-8">
            <p class="p-4 text-3xl font-bold text-center">Больше информации в нашем <span class="site-link link-tgbot gold">Telegram-боте</span>.</p>
        </div>
    </div>`;let c=window.Telegram.WebApp;function ee(){c.isVerticalSwipesEnabled=!1,c.ready(),c.expand(),c.disableVerticalSwipes()}function te(){return c.initData.trim()===""&&!b.tg_mode?(I("error_tg"),1):0}const d=new TON_CONNECT_UI.TonConnectUI({manifestUrl:"https://static.biptoken.xyz/MANIFEST.json",buttonRootId:"ton-connect",enableAndroidBackHandler:!0});d.uiOptions={twaReturnUrl:"https://t.me/BIPapp_bot",language:"ru",uiPreferences:{theme:"SYSTEM"}};d.onStatusChange(e=>{if(d.connected){const t=d.account.address;localStorage.setItem("wallet_address",t),b.tg_mode||axios.post(`https://api.biptoken.xyz/v1/auth/nuw?wallet_address=${t}&tgInitData=${encodeURIComponent(c.initData)}`)}else localStorage.setItem("wallet_address","");localStorage.setItem("wallet_connect",d.connected),W(),F()});async function ne(){try{await d.openModal()}catch{console.log("Invalid connect wallet")}}async function ae(){await d.disconnect()}let _={can:!1,token:void 0,amount:0};function P(e,t){t=t.toUpperCase();let n=document.getElementById("btn_send_transaction");localStorage.setItem(`${t}_input_count`,"0");let a;if(!e||e<=0)n&&t!=="RUB"&&(n==null||n.classList.add("opacity-2"),n.value="Введите значение больше нуля"),a="0 BIPCoin",_.can=!1;else if(isNaN(e*1))n&&t!=="RUB"&&(n.classList.add("opacity-2"),n.value="Введено некорректное значение"),a="Некорректное значение",_.can=!1;else{a=`${se(e,t)} BIPCoin`,localStorage.setItem(`${t}_input_count`,e);let s=localStorage.getItem(`${t}_balance`);e*1<=s?(n&&t!=="RUB"&&(n.classList.remove("opacity-2"),n.value=`Оплатить ${e*1} ${t}`),_.can=!0,_.token=t,_.amount=e):(_.can=!1,n&&t!=="RUB"&&(n.classList.add("opacity-2"),n.value="Недостаточно средств на кошельке"))}try{document.getElementById(`${t}_value`).innerHTML=a}catch{}le(e,t)}function se(e,t){let n=localStorage.getItem("BIP_price");return t.toUpperCase()==="TON"&&(e*=localStorage.getItem("TON_price")),t.toUpperCase()==="RUB"&&(e/=localStorage.getItem("RUB_price")),Math.round(e/n*100)/100}function le(e,t){let n;e.length<=1?n="1rem":n=`${e.length*.5}rem`,document.getElementById(`${t}_input_count`).style.width=n}function ie(){u("send_to_crypto"),u("send_to_card");let e=document.getElementById("send_to_crypto_content"),t;if(!(d.connected||b.wallet_connect==="true"))t=e.innerHTML,e.innerHTML=$;else{t&&(e.innerHTML=t);let s=document.getElementById("TON_input_count");s.addEventListener("input",i=>{P(i.target.value,"TON")});let l=document.getElementById("USDT_input_count");l.addEventListener("input",i=>{P(i.target.value,"USDT")}),S||(l.type="text",s.type="text")}let n=document.getElementById("send_to_card_content"),a;if(!(d.connected||b.wallet_connect==="true"))a=n.innerHTML,n.innerHTML=$;else{a&&(n.innerHTML=a);let s=document.getElementById("RUB_input_count");s.addEventListener("input",i=>{P(i.target.value,"RUB")}),S||(s.type="text");let l;try{l=window.Telegram.WebApp.initDataUnsafe.user.id}catch{l="UserID"}document.getElementById("card_send_code").innerHTML=l,document.getElementById("admin_card_number").innerHTML=h.card}}let f={can:!1,amount:0},k=0;function F(){var n;const e=document.getElementsByClassName("wallet_please_connect"),t=document.getElementsByClassName("wallet_access_connect");if(d.connected||b.wallet_connect==="true"){for(let a of e)a.classList.add("hide");for(let a of t)a.classList.remove("hide");if(((n=c==null?void 0:c.initDataUnsafe.user)==null?void 0:n.id)===1447179490&&(document.getElementById("server_wallet_balance").classList.remove("permanent-hide"),sw_balance_elem.innerHTML=B.balance),Number(localStorage.getItem("BIP_balance"))>0){let a=document.getElementById("BIP_input_count");a==null||a.addEventListener("input",s=>{P(s.target.value,"BIP")}),!S&&a&&(a.type="text")}}else{for(let a of e)a.classList.remove("hide");for(let a of t)a.classList.add("hide")}j([100,1e3,1e4,1]),U(),C()}function C(){var e,t,n,a,s;try{if(localStorage.getItem("BIP_balance")>0?((e=document.getElementById("BIP_input_count"))==null||e.addEventListener("input",l=>{oe(l.target.value)}),(t=document.getElementById("changer_BIP2NFT"))==null||t.classList.remove("hide")):(n=document.getElementById("changer_BIP2NFT"))==null||n.classList.add("hide"),x.length!==0){let l=document.getElementById("wallet_nft_list"),i=1,r="";x.forEach(m=>{let o=m.metadata.name;o==="BIP NFT"&&(o=m.metadata.attributes[0].value.toString()+" "+o);let w=`BIPNFT_${m.index}`;r+=`
            <div class="flex text-lg mt-2">
            <p class="mr-2 text-down">${i}.</p>
            <p class="mr-2 text-down">${o}</p>
            <input type="button" class="input_btn BIP_NFT_sale_button" id="${w}" value="Продать">
            <img src="${m.previews[1].url}" alt="${w}" class="size-8 r-0" id="${w}" >
            </div>
            `,i++}),l&&(l==null?void 0:l.innerHTML)!==r&&(l.innerHTML=r),(a=document.getElementById("changer_NFT2BIP"))==null||a.classList.remove("hide")}else(s=document.getElementById("changer_NFT2BIP"))==null||s.classList.add("hide")}catch(l){console.log(l),setTimeout(C,500)}}function U(){let e=localStorage.getItem("BIP_balance");const t=document.getElementById("BIP_balance");let n=localStorage.getItem("BIP_price");const a=document.getElementById("BIP_price");let s=localStorage.getItem("TON_balance");const l=document.getElementById("TON_balance");let i=localStorage.getItem("USDT_balance");const r=document.getElementById("USDT_balance");t&&(t.innerHTML=Math.floor(e*100)/100,l.innerHTML=Math.floor(s*100)/100,r.innerHTML=Math.floor(i*100)/100,a.innerHTML=Math.floor(n*100)/100)}function oe(e){let t=document.getElementById("btn_send_transaction_to_nft");if(localStorage.setItem("BIP_input_count","0"),!e||e<=0)t&&(t==null||t.classList.add("opacity-2"),t.value="Введите значение больше нуля"),document.getElementById("BIP_input_count").innerHTML="0 BIPCoin",f.can=!1,N();else if(isNaN(e*1))t&&(t.classList.add("opacity-2"),t.value="Некорректное значение"),document.getElementById("BIP_input_count").innerHTML="Некорректное значение",f.can=!1,N();else{document.getElementById("BIP_input_count").innerHTML=`${e} BIPCoin`,localStorage.setItem("BIP_input_count",e),N(e);let a=localStorage.getItem("BIP_balance");e*1<=a?(t&&(t.classList.remove("opacity-2"),t.value="Получить NFT"),f.can=!0,f.amount=e):(f.can=!1,t&&(t.classList.add("opacity-2"),t.value="Недостаточно средств"))}let n;e.length<=1?n="1rem":n=`${e.length*.5}rem`,document.getElementById("BIP_input_count").style.width=n}function j(e){if(typeof e=="object"){for(const t of e)j(t);return}axios.get(`https://nft.biptoken.xyz/CreateItemMetadata?value=${e}`,{responseType:"json",transformResponse:t=>t}).then(t=>{axios.get(JSON.parse(t.data).image);let n=document.getElementById("nft_preshow_img");n&&(n.src=JSON.parse(t.data).image)})}function N(e=0){let t=document.getElementById("nft_preshow_img");if(e<=0){t.classList.add("hide");return}k===e||new Array(t.classList).toString().split(" ").indexOf("hide")===-1&&(e>=1e4&&k>=1e4||e<=99&&k<=99)||(k=e,axios.get(`https://nft.biptoken.xyz/CreateItemMetadata?value=${e}`,{responseType:"json",transformResponse:a=>a}).then(a=>{let s=document.getElementById("wallet_nft_items").scrollHeight;t.style.height=`${s+Be(1)-2}px`,t.src=JSON.parse(a.data).image,t.classList.remove("hide")}).catch(a=>{console.error(`Got a bad format response with status code ${a.response.status}: ${a.response.data}`)}))}let L=null;function ce(){document.addEventListener("touchstart",de,!1),document.addEventListener("touchmove",re,!1),document.addEventListener("keydown",e=>{e.key==="ArrowRight"&&V(),e.key==="ArrowLeft"&&K()})}function de(e){L=e.touches[0].clientX,e.touches[0].clientY}function re(e){if(!L)return;const t=e.touches[0].clientX;e.touches[0].clientY;const n=L-t;Math.abs(n)>window.screen.width/5&&(n>0?V():n<0&&K(),L=null)}const y=new window.TonWeb;async function q(e,t,n=1){const a=y.utils.Address;let s=new y.boc.Cell;return s.bits.writeUint(260734629,32),s.bits.writeUint(Date.now(),64),s.bits.writeCoins(e),s.bits.writeAddress(new a(t)),s.bits.writeAddress(new a(localStorage.getItem("wallet_address"))),s.bits.writeUint(0,1),s.bits.writeCoins(n),s.bits.writeUint(0,1),y.utils.bytesToBase64(await s.toBoc())}async function pe(e,t=.15*1e9){const n=y.utils.Address;let a=new y.boc.Cell;return a.bits.writeUint(1607220500,32),a.bits.writeUint(Date.now(),64),a.bits.writeAddress(new n(e)),a.bits.writeAddress(new n(localStorage.getItem("wallet_address"))),a.bits.writeUint(0,1),a.bits.writeCoins(t),a.bits.writeUint(0,1),y.utils.bytesToBase64(await a.toBoc())}async function me(e,t){if(e==="TON")return{validUntil:Math.floor(new Date/1e3)+360,messages:[{address:h.buy_wallet,amount:t*1e9}]};if(e==="USDT")return t*=1e6,{validUntil:Math.floor(new Date/1e3)+360,messages:[{address:localStorage.getItem("USDT_wallet_address"),amount:.06*1e9,payload:await q(t,h.buy_wallet)}]};if(e==="BIP")return t*=1e9,{validUntil:Math.floor(new Date/1e3)+360,messages:[{address:localStorage.getItem("BIP_wallet_address"),amount:.2*1e9,payload:await q(t,h.nft_wallet,.15*1e9)}]}}async function _e(e){return{validUntil:Math.floor(new Date/1e3)+360,messages:[{address:e,amount:.2*1e9,payload:await pe(h.nft_wallet)}]}}async function A(e="TON",t=.942){return await d.sendTransaction(await me(e,t))}async function ue(e){return await d.sendTransaction(await _e(e))}async function ge(){document.addEventListener("click",async function(e){var t,n,a,s,l,i,r,m;if((t=e.target)!=null&&t.className.includes("btn_page_wallet")&&I("wallet"),(n=e.target)!=null&&n.className.includes("btn_wallet_connect")&&await ne(),(a=e.target)!=null&&a.className.includes("btn_wallet_disconnect")&&await ae(),((s=e.target)==null?void 0:s.id)==="btn_send_transaction"&&_.can&&(await A(_.token,_.amount)?document.getElementById("btn_send_transaction").value="Транзакция обрабатывается":document.getElementById("btn_send_transaction").value="Ошибка при отправке транзакции"),((l=e.target)==null?void 0:l.id)==="btn_send_transaction_to_nft"&&f.can&&(await A("BIP",f.amount)?document.getElementById("btn_send_transaction_to_nft").value="Транзакция обрабатывается":document.getElementById("btn_send_transaction_to_nft").value="Ошибка при отправке транзакции"),((i=e.target)==null?void 0:i.id)==="copy_admin_card_number"){let o=document.getElementById("admin_card_number");o.classList.add("anim"),setTimeout(()=>o.classList.remove("anim"),1e3),await navigator.clipboard.writeText(o.innerHTML)}if(((r=e.target)==null?void 0:r.id)==="copy_card_send_code"){let o=document.getElementById("card_send_code");o.classList.add("anim"),setTimeout(()=>o.classList.remove("anim"),1e3),await navigator.clipboard.writeText(o.innerHTML)}if(((m=e.target)==null?void 0:m.classList.toString().split(" ").indexOf("BIP_NFT_sale_button"))!==-1)for(const o of x)o.index.toString()===e.target.id.split("_")[1]&&(console.log(o.address),console.log(x),await ue(o.address))})}let b={},x=[],h,S,B={};const fe="0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe",be="0:786e74bba071d57c75004bb41bf978ea73e00b03f3f3fbf2b73ea0426f97d6e9",R={BIP:be,USDT:fe};function we(){let e=location.search.substring(1).split("&");for(let t=0;t<e.length;t++){let n=e[t].split("=");b[n[0]]=n[1]}}function ve(){if(!c.initData)return B;axios.get("https://api.biptoken.xyz/v1/wallet/info",{params:{tgInitData:encodeURIComponent(c.initData)}}).then(e=>{e.data.op==="0"&&(B=e.data.data)}).finally(()=>(console.log(B),B))}function ye(){axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then(e=>{localStorage.setItem("RUB_price",e.data.Valute.USD.Value)}).finally(()=>localStorage.getItem("RUB_price"))}function he(){axios.get("https://api.coingecko.com/api/v3/coins/the-open-network").then(e=>{localStorage.setItem("TON_price",e.data.market_data.current_price.usd)}).finally(()=>localStorage.getItem("TON_price"))}function Ie(){axios.get("https://api.geckoterminal.com/api/v2/networks/ton/pools/EQCJWbehGyHtkgw6IMzcY1VPAJwre1sWWGvqKYm1_h0CpsJe").then(t=>{localStorage.setItem("BIP_price",t.data.data.attributes.base_token_price_quote_token)}).finally(()=>localStorage.getItem("BIP_price"))}function W(){let e=localStorage.getItem("wallet_address");if(e)axios.get(`https://tonapi.io/v2/accounts/${e}/jettons`).then(t=>{axios.get(`https://tonapi.io/v2/accounts/${localStorage.getItem("wallet_address")}/nfts?collection=EQDhO_YVxvb3p68hqte0kNG5jdO44WQFgWdCe8GvgVkrws4Z`).then(n=>{x=n.data.nft_items,C()});for(let n of t.data.balances)for(let[a,s]of Object.entries(R))n.jetton.address===s&&(localStorage.setItem(`${a}_balance`,n.balance/10**n.jetton.decimals),localStorage.setItem(`${a}_wallet_address`,n.wallet_address.address));U()}),axios.get(`https://tonapi.io/v2/accounts/${e}`).then(t=>{localStorage.setItem("TON_balance",t.data.balance/10**9)}).catch(t=>{localStorage.setItem("TON_balance",0)}).finally(()=>{U()});else{localStorage.setItem("TON_balance",0);for(let[t,n]of Object.entries(R))localStorage.setItem(`${t}_balance`,"0"),localStorage.setItem(`${t}_wallet_address`,"")}}function Be(e){return e*parseFloat(getComputedStyle(document.documentElement).fontSize)}let T={};function u(e){let t=document.getElementById(`${e}_arrow`),n=document.getElementById(`${e}_content`);T[e]=0,t.addEventListener("click",()=>{T[e]?(t.innerHTML="keyboard_arrow_down",n.classList.add("hide"),T[e]=0):(t.innerHTML="keyboard_arrow_up",n.classList.remove("hide"),T[e]=1)})}async function xe(){await ge(),ee(),ce(),document.querySelectorAll(".material-symbols-outlined").forEach(n=>{n.classList.add("icon-load")}),document.fonts.ready.then(()=>{document.querySelectorAll(".material-symbols-outlined").forEach(n=>{n.classList.remove("icon-load")})});const e=document.querySelector("#root"),t=document.createElement("div");t.id="bottom-navigation",e.appendChild(t),setInterval(ye,20*60*1e3),setInterval(he,60*1e3),setInterval(Ie,60*1e3),c.initData&&setInterval(ve,10*1e3),setInterval(W,10*1e3),await axios.get("https://api.biptoken.xyz/v1/info/payments").then(n=>{n.status===200&&(h=n.data)}),S=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}let p="info",g;const E={info:"info",wallet:"account_balance_wallet",nft:"savings",cart:"shopping_cart",book:"import_contacts"};function V(){let e=g.indexOf(p)+1;e<g.length&&I(g[e])}function K(){let e=g.indexOf(p)-1;e>=0&&I(g[e])}function I(e){let t=document.getElementById("btn-".concat(p));t==null||t.classList.remove("gold"),t==null||t.classList.add("gold-dark"),p=e,X();let n=document.getElementById("btn-".concat(e));n==null||n.classList.remove("gold-dark"),n==null||n.classList.add("gold")}function ke(){var t,n;b.beta==="true"||((n=(t=c==null?void 0:c.initDataUnsafe)==null?void 0:t.user)==null?void 0:n.id)===1447179490||delete E.nft,g=Object.keys(E);const e=document.getElementById("bottom-navigation");g.forEach(a=>{let s="btn-".concat(a);e.insertAdjacentHTML("beforeend",`
            <div id="${s}" class="nav-img gold-dark" style="width: ${100/g.length}%">
                    <span class="material-symbols-outlined" >${E[a]}</span>

            </div>`),document.querySelector("#"+s).addEventListener("click",()=>{I(a)})}),I(p)}async function Te(){document.addEventListener("click",async function(e){var t,n,a,s,l,i,r,m,o,w,M,O,D;(t=e.target)!=null&&t.className.includes("link-biptoken")&&window.open("https://t.me/BIPholders","_blank"),(n=e.target)!=null&&n.className.includes("link-tg-how-to-buy")&&window.open("https://t.me/BIPholders/6","_blank"),(a=e.target)!=null&&a.className.includes("link-bipizm")&&window.open("https://t.me/BIPuserchat","_blank"),(s=e.target)!=null&&s.className.includes("link-biplions")&&window.open("https://t.me/biplions1","_blank"),(l=e.target)!=null&&l.className.includes("link-tgbot")&&window.open("https://t.me/BIPapp_bot?start=app","_blank"),(i=e.target)!=null&&i.className.includes("link-baltinvestproject")&&window.open("https://t.me/BaltInvestProekt","_blank"),(r=e.target)!=null&&r.className.includes("link-how-buy-usdt-on-wallet")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-ili-lyuboj-drugoj-token-12-04","_blank"),(m=e.target)!=null&&m.className.includes("link-how-buy-usdt-on-CEX")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-na-Birzhe-12-04","_blank"),(o=e.target)!=null&&o.className.includes("link-how-buy-verif-on-CEX")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-verifikaciyu-na-Birzhe-12-04","_blank"),(w=e.target)!=null&&w.className.includes("link-how-buy-rub")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-RUB-12-04","_blank"),(M=e.target)!=null&&M.className.includes("link-how-sell-rub")&&window.open("https://telegra.ph/Kak-prodat-BIPCoin-02-08","_blank"),(O=e.target)!=null&&O.className.includes("link-how-create-tk")&&window.open("https://telegra.ph/Kak-sozdat-svoj-koshelek-Tonkeeper-12-16","_blank"),(D=e.target)!=null&&D.className.includes("link-baltinvestpro-stats")&&window.open("https://www.rusprofile.ru/id/4405609","_blank")})}function z(){u("faq"),u("faq_get_bip"),u("faq_why_we_work"),u("faq_how_bip_work"),u("faq_how_much_pay"),u("faq_details"),document.getElementById("faq_arrow").addEventListener("click",()=>{document.getElementById("faq").classList.toggle("inline")})}const v=document.querySelector("#page");function X(){p==="info"?(v.innerHTML=H,z()):p==="wallet"?(v.innerHTML=J,F()):p==="nft"?v.innerHTML=Y:p==="cart"?(v.innerHTML=G,ie()):p==="book"?v.innerHTML=Q:p==="error_tg"&&(v.innerHTML=H+Z,z())}async function Pe(){we(),await Te(),te()||(await xe(),ke(),X())}(async()=>document.addEventListener("DOMContentLoaded",async()=>Pe()))();
