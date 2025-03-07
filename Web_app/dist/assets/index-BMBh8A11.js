(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const $=`
    <div id="error_connect_wallet">
        <p class="text-lg">Сначала подключите <span class="gold site-link btn_page_wallet">кошелек</span></p>
    </div>`,D=`
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
    `,X=`
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
            <div class="message-cloud text-lg p-4">
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
    `,J=`
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
    </div>`,Q=`
    <div id = "error-tg">
        <br>
        <div class="message-cloud mt-8">
            <p class="p-4 text-3xl font-bold text-center">Больше информации в нашем <span class="site-link link-tgbot gold">Telegram-боте</span>.</p>
        </div>
    </div>`;let p="info";const R={info:"info",wallet:"account_balance_wallet",cart:"shopping_cart",book:"import_contacts"};let g=Object.keys(R);function F(){let e=g.indexOf(p)+1;e<g.length&&y(g[e])}function j(){let e=g.indexOf(p)-1;e>=0&&y(g[e])}function y(e){let t=document.getElementById("btn-".concat(p));t==null||t.classList.remove("gold"),t==null||t.classList.add("gold-dark"),p=e,V();let n=document.getElementById("btn-".concat(e));n==null||n.classList.remove("gold-dark"),n==null||n.classList.add("gold")}function Y(){const e=document.getElementById("bottom-navigation");g.forEach(t=>{let n="btn-".concat(t);e.insertAdjacentHTML("beforeend",`
            <div id="${n}" class="nav-img gold-dark" style="width: ${100/g.length}%">
                    <span class="material-symbols-outlined" >${R[t]}</span>

            </div>`),document.querySelector("#"+n).addEventListener("click",()=>{y(t)})}),y(p)}let b=window.Telegram.WebApp;function Z(){b.isVerticalSwipesEnabled=!1,b.ready(),b.expand(),b.disableVerticalSwipes()}function ee(){return b.initData.trim()===""&&!U.tg_mode?(y("error_tg"),1):0}const c=new TON_CONNECT_UI.TonConnectUI({manifestUrl:"https://static.biptoken.xyz/MANIFEST.json",buttonRootId:"ton-connect",enableAndroidBackHandler:!0});c.uiOptions={twaReturnUrl:"https://t.me/BIPapp_bot",language:"ru",uiPreferences:{theme:"SYSTEM"}};c.onStatusChange(e=>{if(c.connected){const t=c.account.address;localStorage.setItem("wallet_address",t),U.tg_mode||axios.post(`https://api.biptoken.xyz/v1/auth/nuw?wallet_address=${t}&tgInitData=${encodeURIComponent(b.initData)}`)}else localStorage.setItem("wallet_address","");localStorage.setItem("wallet_connect",c.connected),S(),W()});async function te(){try{await c.openModal()}catch{console.log("Invalid connect wallet")}}async function ne(){await c.disconnect()}let m={can:!1,token:void 0,amount:0};function k(e,t){t=t.toUpperCase();let n=document.getElementById("btn_send_transaction");localStorage.setItem(`${t}_input_count`,"0");let a;if(!e||e<=0)n&&t!=="RUB"&&(n==null||n.classList.add("opacity-2"),n.value="Введите значение больше нуля"),a="0 BIPCoin",m.can=!1;else if(isNaN(e*1))n&&t!=="RUB"&&(n.classList.add("opacity-2"),n.value="Введено некорректное значение"),a="Некорректное значение",m.can=!1;else{a=`${ae(e,t)} BIPCoin`,localStorage.setItem(`${t}_input_count`,e);let s=localStorage.getItem(`${t}_balance`);e*1<=s?(n&&t!=="RUB"&&(n.classList.remove("opacity-2"),n.value=`Оплатить ${e*1} ${t}`),m.can=!0,m.token=t,m.amount=e):(m.can=!1,n&&t!=="RUB"&&(n.classList.add("opacity-2"),n.value="Недостаточно средств на кошельке"))}try{document.getElementById(`${t}_value`).innerHTML=a}catch{}se(e,t)}function ae(e,t){let n=localStorage.getItem("BIP_price");return t.toUpperCase()==="TON"&&(e*=localStorage.getItem("TON_price")),t.toUpperCase()==="RUB"&&(e/=localStorage.getItem("RUB_price")),Math.round(e/n*100)/100}function se(e,t){let n;e.length<=1?n="1rem":n=`${e.length*.5}rem`,document.getElementById(`${t}_input_count`).style.width=n}function le(){_("send_to_crypto"),_("send_to_card");let e=document.getElementById("send_to_crypto_content"),t;if(!c.connected)t=e.innerHTML,e.innerHTML=$;else{t&&(e.innerHTML=t);let s=document.getElementById("TON_input_count");s.addEventListener("input",i=>{k(i.target.value,"TON")});let l=document.getElementById("USDT_input_count");l.addEventListener("input",i=>{k(i.target.value,"USDT")}),P||(l.type="text",s.type="text")}let n=document.getElementById("send_to_card_content"),a;if(!c.connected)a=n.innerHTML,n.innerHTML=$;else{a&&(n.innerHTML=a);let s=document.getElementById("RUB_input_count");s.addEventListener("input",i=>{k(i.target.value,"RUB")}),P||(s.type="text");let l;try{l=window.Telegram.WebApp.initDataUnsafe.user.id}catch{l="UserID"}document.getElementById("card_send_code").innerHTML=l,document.getElementById("admin_card_number").innerHTML=v.card}}let u={can:!1,amount:0},B=0;function W(){const e=document.getElementsByClassName("wallet_please_connect"),t=document.getElementsByClassName("wallet_access_connect");if(c.connected){for(let n of e)n.classList.add("hide");for(let n of t)n.classList.remove("hide");if(Number(localStorage.getItem("BIP_balance"))>0){let n=document.getElementById("BIP_input_count");n==null||n.addEventListener("input",a=>{k(a.target.value,"BIP")}),!P&&n&&(n.type="text")}}else{for(let n of e)n.classList.remove("hide");for(let n of t)n.classList.add("hide")}K([100,1e3,1e4,1]),N(),E()}function E(){var e,t,n,a,s;try{if(localStorage.getItem("BIP_balance")>0?((e=document.getElementById("BIP_input_count"))==null||e.addEventListener("input",l=>{ie(l.target.value)}),(t=document.getElementById("changer_BIP2NFT"))==null||t.classList.remove("hide")):(n=document.getElementById("changer_BIP2NFT"))==null||n.classList.add("hide"),I.length!==0){let l=document.getElementById("wallet_nft_list"),i=1,d="";I.forEach(r=>{let o=r.metadata.name;o==="BIP NFT"&&(o=r.metadata.attributes[0].value.toString()+" "+o);let f=`BIPNFT_${r.index}`;d+=`
            <div class="flex text-lg mt-2">
            <p class="mr-2 text-down">${i}.</p>
            <p class="mr-2 text-down">${o}</p>
            <input type="button" class="input_btn BIP_NFT_sale_button" id="${f}" value="Продать">
            <img src="${r.previews[1].url}" alt="${f}" class="size-8 r-0" id="${f}" >
            </div>
            `,i++}),l&&(l==null?void 0:l.innerHTML)!==d&&(l.innerHTML=d),(a=document.getElementById("changer_NFT2BIP"))==null||a.classList.remove("hide")}else(s=document.getElementById("changer_NFT2BIP"))==null||s.classList.add("hide")}catch(l){console.log(l),setTimeout(E,500)}}function N(){let e=localStorage.getItem("BIP_balance");const t=document.getElementById("BIP_balance");let n=localStorage.getItem("BIP_price");const a=document.getElementById("BIP_price");let s=localStorage.getItem("TON_balance");const l=document.getElementById("TON_balance");let i=localStorage.getItem("USDT_balance");const d=document.getElementById("USDT_balance");t&&(t.innerHTML=Math.floor(e*100)/100,l.innerHTML=Math.floor(s*100)/100,d.innerHTML=Math.floor(i*100)/100,a.innerHTML=Math.floor(n*100)/100)}function ie(e){let t=document.getElementById("btn_send_transaction_to_nft");if(localStorage.setItem("BIP_input_count","0"),!e||e<=0)t&&(t==null||t.classList.add("opacity-2"),t.value="Введите значение больше нуля"),document.getElementById("BIP_input_count").innerHTML="0 BIPCoin",u.can=!1,L();else if(isNaN(e*1))t&&(t.classList.add("opacity-2"),t.value="Некорректное значение"),document.getElementById("BIP_input_count").innerHTML="Некорректное значение",u.can=!1,L();else{document.getElementById("BIP_input_count").innerHTML=`${e} BIPCoin`,localStorage.setItem("BIP_input_count",e),L(e);let a=localStorage.getItem("BIP_balance");e*1<=a?(t&&(t.classList.remove("opacity-2"),t.value="Получить NFT"),u.can=!0,u.amount=e):(u.can=!1,t&&(t.classList.add("opacity-2"),t.value="Недостаточно средств"))}let n;e.length<=1?n="1rem":n=`${e.length*.5}rem`,document.getElementById("BIP_input_count").style.width=n}function K(e){if(typeof e=="object"){for(const t of e)K(t);return}axios.get(`https://nft.biptoken.xyz/CreateItemMetadata?value=${e}`,{responseType:"json",transformResponse:t=>t}).then(t=>{axios.get(JSON.parse(t.data).image);let n=document.getElementById("nft_preshow_img");n&&(n.src=JSON.parse(t.data).image)})}function L(e=0){let t=document.getElementById("nft_preshow_img");if(e<=0){t.classList.add("hide");return}B===e||new Array(t.classList).toString().split(" ").indexOf("hide")===-1&&(e>=1e4&&B>=1e4||e<=99&&B<=99)||(B=e,axios.get(`https://nft.biptoken.xyz/CreateItemMetadata?value=${e}`,{responseType:"json",transformResponse:a=>a}).then(a=>{let s=document.getElementById("wallet_nft_items").scrollHeight;t.style.height=`${s+we(1)-2}px`,t.src=JSON.parse(a.data).image,t.classList.remove("hide")}).catch(a=>{console.error(`Got a bad format response with status code ${a.response.status}: ${a.response.data}`)}))}let T=null;function oe(){document.addEventListener("touchstart",ce,!1),document.addEventListener("touchmove",de,!1),document.addEventListener("keydown",e=>{e.key==="ArrowRight"&&F(),e.key==="ArrowLeft"&&j()})}function ce(e){T=e.touches[0].clientX}function de(e){if(!T)return;const t=e.touches[0].clientX,n=T-t;Math.abs(n)>window.screen.width/5&&(n>0?F():n<0&&j(),T=null)}const w=new window.TonWeb;async function H(e,t,n=1){const a=w.utils.Address;let s=new w.boc.Cell;return s.bits.writeUint(260734629,32),s.bits.writeUint(Date.now(),64),s.bits.writeCoins(e),s.bits.writeAddress(new a(t)),s.bits.writeAddress(new a(localStorage.getItem("wallet_address"))),s.bits.writeUint(0,1),s.bits.writeCoins(n),s.bits.writeUint(0,1),w.utils.bytesToBase64(await s.toBoc())}async function re(e,t=.15*1e9){const n=w.utils.Address;let a=new w.boc.Cell;return a.bits.writeUint(1607220500,32),a.bits.writeUint(Date.now(),64),a.bits.writeAddress(new n(e)),a.bits.writeAddress(new n(localStorage.getItem("wallet_address"))),a.bits.writeUint(0,1),a.bits.writeCoins(t),a.bits.writeUint(0,1),w.utils.bytesToBase64(await a.toBoc())}async function pe(e,t){if(e==="TON")return{validUntil:Math.floor(new Date/1e3)+360,messages:[{address:v.buy_wallet,amount:t*1e9}]};if(e==="USDT")return t*=1e6,{validUntil:Math.floor(new Date/1e3)+360,messages:[{address:localStorage.getItem("USDT_wallet_address"),amount:.06*1e9,payload:await H(t,v.buy_wallet)}]};if(e==="BIP")return t*=1e9,{validUntil:Math.floor(new Date/1e3)+360,messages:[{address:localStorage.getItem("BIP_wallet_address"),amount:.2*1e9,payload:await H(t,v.nft_wallet,.15*1e9)}]}}async function me(e){return{validUntil:Math.floor(new Date/1e3)+360,messages:[{address:e,amount:.2*1e9,payload:await re(v.nft_wallet)}]}}async function q(e="TON",t=.942){return await c.sendTransaction(await pe(e,t))}async function _e(e){return await c.sendTransaction(await me(e))}async function ue(){document.addEventListener("click",async function(e){var t,n,a,s,l,i,d,r;if((t=e.target)!=null&&t.className.includes("btn_page_wallet")&&y("wallet"),(n=e.target)!=null&&n.className.includes("btn_wallet_connect")&&await te(),(a=e.target)!=null&&a.className.includes("btn_wallet_disconnect")&&await ne(),((s=e.target)==null?void 0:s.id)==="btn_send_transaction"&&m.can&&(await q(m.token,m.amount)?document.getElementById("btn_send_transaction").value="Транзакция обрабатывается":document.getElementById("btn_send_transaction").value="Ошибка при отправке транзакции"),((l=e.target)==null?void 0:l.id)==="btn_send_transaction_to_nft"&&u.can&&(await q("BIP",u.amount)?document.getElementById("btn_send_transaction_to_nft").value="Транзакция обрабатывается":document.getElementById("btn_send_transaction_to_nft").value="Ошибка при отправке транзакции"),((i=e.target)==null?void 0:i.id)==="copy_admin_card_number"){let o=document.getElementById("admin_card_number");o.classList.add("anim"),setTimeout(()=>o.classList.remove("anim"),1e3),await navigator.clipboard.writeText(o.innerHTML)}if(((d=e.target)==null?void 0:d.id)==="copy_card_send_code"){let o=document.getElementById("card_send_code");o.classList.add("anim"),setTimeout(()=>o.classList.remove("anim"),1e3),await navigator.clipboard.writeText(o.innerHTML)}if(((r=e.target)==null?void 0:r.classList.toString().split(" ").indexOf("BIP_NFT_sale_button"))!==-1)for(const o of I)o.index.toString()===e.target.id.split("_")[1]&&(console.log(o.address),console.log(I),await _e(o.address))})}let U={},I=[],v,P;const ge="0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe",fe="0:786e74bba071d57c75004bb41bf978ea73e00b03f3f3fbf2b73ea0426f97d6e9",A={BIP:fe,USDT:ge};function be(){let e=location.search.substring(1).split("&");for(let t=0;t<e.length;t++){let n=e[t].split("=");U[n[0]]=n[1]}}function S(){let e=localStorage.getItem("wallet_address");if(axios.get("https://api.biptoken.xyz/v1/price/tokens").then(t=>{let n=Object(t.data);Object.entries(n).forEach(a=>{localStorage.setItem(`${a[0].toUpperCase()}_price`,a[1])})}),e)axios.get(`https://tonapi.io/v2/accounts/${e}/jettons`).then(t=>{for(let n of t.data.balances)for(let[a,s]of Object.entries(A))n.jetton.address===s&&(localStorage.setItem(`${a}_balance`,n.balance/10**n.jetton.decimals),localStorage.setItem(`${a}_wallet_address`,n.wallet_address.address));N()}),axios.get(`https://tonapi.io/v2/accounts/${e}`).then(t=>{localStorage.setItem("TON_balance",t.data.balance/10**9)}).catch(t=>{localStorage.setItem("TON_balance",0)}).finally(()=>{N()}),axios.get(`https://tonapi.io/v2/accounts/${localStorage.getItem("wallet_address")}/nfts?collection=EQDhO_YVxvb3p68hqte0kNG5jdO44WQFgWdCe8GvgVkrws4Z`).then(t=>{I=t.data.nft_items}).finally(()=>{E()});else{localStorage.setItem("TON_balance",0);for(let[t,n]of Object.entries(A))localStorage.setItem(`${t}_balance`,"0"),localStorage.setItem(`${t}_wallet_address`,"")}}function we(e){return e*parseFloat(getComputedStyle(document.documentElement).fontSize)}let x={};function _(e){let t=document.getElementById(`${e}_arrow`),n=document.getElementById(`${e}_content`);x[e]=0,t.addEventListener("click",()=>{x[e]?(t.innerHTML="keyboard_arrow_down",n.classList.add("hide"),x[e]=0):(t.innerHTML="keyboard_arrow_up",n.classList.remove("hide"),x[e]=1)})}async function ve(){await ue(),Z(),oe();const e=document.querySelector("#root"),t=document.createElement("div");t.id="bottom-navigation",e.appendChild(t),S(),setInterval(S,1e4),await axios.get("https://api.biptoken.xyz/v1/info/payments").then(n=>{n.status===200&&(v=n.data)}),P=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}async function ye(){document.addEventListener("click",async function(e){var t,n,a,s,l,i,d,r,o,f,C,O,M;(t=e.target)!=null&&t.className.includes("link-biptoken")&&window.open("https://t.me/BIPholders","_blank"),(n=e.target)!=null&&n.className.includes("link-tg-how-to-buy")&&window.open("https://t.me/BIPholders/6","_blank"),(a=e.target)!=null&&a.className.includes("link-bipizm")&&window.open("https://t.me/BIPuserchat","_blank"),(s=e.target)!=null&&s.className.includes("link-biplions")&&window.open("https://t.me/biplions1","_blank"),(l=e.target)!=null&&l.className.includes("link-tgbot")&&window.open("https://t.me/BIPapp_bot?start=app","_blank"),(i=e.target)!=null&&i.className.includes("link-baltinvestproject")&&window.open("https://t.me/BaltInvestProekt","_blank"),(d=e.target)!=null&&d.className.includes("link-how-buy-usdt-on-wallet")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-ili-lyuboj-drugoj-token-12-04","_blank"),(r=e.target)!=null&&r.className.includes("link-how-buy-usdt-on-CEX")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-na-Birzhe-12-04","_blank"),(o=e.target)!=null&&o.className.includes("link-how-buy-verif-on-CEX")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-verifikaciyu-na-Birzhe-12-04","_blank"),(f=e.target)!=null&&f.className.includes("link-how-buy-rub")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-RUB-12-04","_blank"),(C=e.target)!=null&&C.className.includes("link-how-sell-rub")&&window.open("https://telegra.ph/Kak-prodat-BIPCoin-02-08","_blank"),(O=e.target)!=null&&O.className.includes("link-how-create-tk")&&window.open("https://telegra.ph/Kak-sozdat-svoj-koshelek-Tonkeeper-12-16","_blank"),(M=e.target)!=null&&M.className.includes("link-baltinvestpro-stats")&&window.open("https://www.rusprofile.ru/id/4405609","_blank")})}function z(){_("faq"),_("faq_get_bip"),_("faq_why_we_work"),_("faq_how_bip_work"),_("faq_how_much_pay"),_("faq_details"),document.getElementById("faq_arrow").addEventListener("click",()=>{document.getElementById("faq").classList.toggle("inline")})}const h=document.querySelector("#page");function V(){p==="info"?(h.innerHTML=D,z()):p==="wallet"?(h.innerHTML=X,W()):p==="cart"?(h.innerHTML=G,le()):p==="book"?h.innerHTML=J:p==="error_tg"&&(h.innerHTML=D+Q,z())}async function he(){be(),await ye(),ee()||(await ve(),Y(),V())}document.addEventListener("DOMContentLoaded",async()=>he());
