(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const D=`
    <div id="error_connect_wallet">
        <p class="text-lg">Сначала подключите <span class="gold site-link btn_page_wallet">кошелек</span></p>
    </div>`,H=`
    <div id="info">
        <div class="message-cloud">
            <p class="text-center text-sm text-hint mt-1">
                <span class="gold font-bold text-3xl m-0 ml-4">BIPCoin</span> - первая цифровая монета, привязанная к экономической деятельности реальной компании.</p>
        </div>
        <div class="message-cloud mt-4">
            <p class="text-base text-center m-0"><span class="gold font-bold text-lg link-biptoken site-link">BIP Token</span> - главный канал токена. Там публикуются самые свежие новости о BIP.</p>
            <p class="text-base text-center m-0"><span class="gold font-bold text-lg link-bipizm site-link">Бипизм</span> - чат для обсуждения любых событий.</p>
        </div>
        <div class="message-cloud mt-4">
            <p class="text-base text-center m-0"><span class="gold font-bold text-lg link-baltinvestproject site-link">Архитектура и Проектирование</span> - канал, посвященный компании ООО "БИП".</p>
            <p class="text-base text-center m-0 mt-1"><span class="gold font-bold text-lg link-biplions site-link">Баскетбол | BIP LIONS</span> - наша баскетбольная команда.</p>
        </div>
        <div class="message-cloud inline text-sm" id="faq">
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
    `,Y=`
    <div id="wallet">
        <div class="message-cloud">
            <p class="text-3xl gold font-bold text-center m-0">
            Кошелек
            </p>
        </div>
        <div class="flex mt-4" id="wallet_info">
            <div class="message-cloud btn_wallet_disconnect pl-1 pr-1 l-0 r-0 wallet_access_connect flex hide">
                <p class="green text-lg btn_wallet_disconnect">Привязан</p>
                <span class="size-7 red material-symbols-outlined btn_wallet_disconnect">delete</span>
            </div>
            <div class="message-cloud wallet_please_connect l-0 r-0">
                <p class="btn_wallet_connect site-link gold text-lg" >Подключить кошелек</p>
            </div>
            <div class="message-cloud wallet_please_connect l-0 r-0">
                <p class="site-link link-how-create-tk text-lg gold">Как создать?</p>
            </div>
            <div class="message-cloud text-lg pl-1 pr-1 l-0 r-0">
                <p class="inline">Цена BIPCoin - <span class="gold" id="BIP_price">0</span>$</p>
            </div>
        </div>
        <div class="mt-4 message-cloud wallet_access_connect hide" id="wallet_balance">
            <p class="text-2xl">Баланс криптокошелька</p>
            <p class="text-lg"><span class="gold" id="BIP_balance">NONE</span> BIPCoin</p>
            <p class="text-lg"><span class="gold" id="TON_balance">NONE</span> TON</p>
            <p class="text-lg"><span class="gold" id="USDT_balance">NONE</span> USDT</p>
        </div>
        <div class="message-cloud wallet_access_connect" id="server_wallet">
            <div class="" id="server_wallet_balance">
                <p class="text-2xl">Баланс на сервере</p>
                <p class="text-lg"><span class="gold" id="sw_balance_num">NONE</span> BIPCoin</p>
            </div>
            <div class="flex mt-4 text-lg">
                <p class="mr-2">Вывести на кошелек </p>
                <input class="input_number mr-2" id="BIP_transfer_input_count" placeholder="0" type="number">
                <p class="mr-2"> BIP</p>
            </div>
            <input class="input_btn opacity-2 mt-1" id="btn_send_transaction_to_sw" type="button" value="Подтвердить">
            
        </div>
        <div class="mt-4 message-cloud wallet_access_connect" id="server_wallet_transactions">
            <p class="text-2xl">История транзакций</p>
            <div id="sw_transactions_list"></div>
        </div>
    </div>
`,G=`
    <div id="nft">
        <div class="" id="nft_changer">
            <div class="message-cloud hide mt-4" id="changer_BIP2NFT">    
                <p class="text-2xl">Конвертация BIPCoin в NFT</p>
                <div class="flex ml-2">
                    <div class="mt-4" id="wallet_nft_items">
                        <div class="flex">
                            <input class="input_number" id="BIP_input_count" placeholder="0" type="number">
                            <p class="text-lg ml-2">BIPCoin</p>
                        </div>
                        <input class="input_btn opacity-2 mt-1" id="btn_send_transaction_to_nft" type="button" value="Введите значение больше нуля">
                    </div>
                    <img alt="nft image" class="img-border r-0 hide" id="nft_preshow_img" src="">
                </div>
            </div>
            <div class="message-cloud hide" id="changer_NFT2BIP">    
                <div class="" id="wallet_nft">
                    <p class="text-2xl">Конвертация NFT в BIPCoin</p>
                    <div class="ml-2 mt-2" id="wallet_nft_list">
                    </div>
                </div>
            </div>
            
        </div>
    </div>
`,Q=`
    <div id="cart">
        <div class="message-cloud">
            <p class="text-3xl gold font-bold text-center m-0">Купить у авторов</p>
        </div>
        <div class="message-cloud mt-4">
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
        
        <div class="message-cloud">
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
        <div class="message-cloud">
            <p class="text-lg m-0 gold font-bold">СБП</p>
            <p class="text-sm m-0 text-hint pl-4">в разработке</p>
        </div>
    </div>
    `,J=`
    <div id="hub">
        <div class="message-cloud">
            <p class="text-3xl gold font-bold text-center m-0">Обучение</p>
        </div>
        <div class="text-base message-cloud mt-4">
            <p class="text-2xl">Как купить BIPCoin если есть:</p>
            <div class="ml-2 mt-2 gold">
                <p class="site-link-lite inline link-how-buy-usdt-on-wallet">- USDT на криптокошельке в сети TON.</p><br>
                <p class="site-link-lite inline pt-1 link-how-buy-usdt-on-CEX">- USDT на криптобирже.</p><br>
                <p class="site-link-lite inline pt-1 link-how-buy-verif-on-CEX">- RUB и верификация на криптобирже.</p><br>
                <p class="site-link-lite inline pt-1 link-how-buy-rub">- RUB и желание купить)</p><br>
            </div>
        </div>
        <div class="text-base message-cloud mt-4">
            <p class="text-2xl">Как создать:</p>
            <div class="gold ml-2">
                <p class="site-link-lite inline link-how-create-tk">- Криптовалютный кошелек.</p><br>
            </div>
        </div>
        <div class="text-base message-cloud mt-4">
            <div class="gold">
                <p class="text-2xl site-link-lite inline link-how-sell-rub">Как продать BIPCoin</p><br>
            </div>
        </div>
    </div>`,Z=`
    <div id = "error-tg">
        <br>
        <div class="message-cloud mt-8">
            <p class="p-4 text-3xl font-bold text-center">Больше информации в нашем <span class="site-link link-tgbot gold">Telegram-боте</span>.</p>
        </div>
    </div>`;let _="info",b;const tt={info:"info",wallet:"account_balance_wallet",nft:"savings",cart:"shopping_cart",book:"import_contacts"};function R(){let t=b.indexOf(_)+1;t<b.length&&I(b[t])}function z(){let t=b.indexOf(_)-1;t>=0&&I(b[t])}function I(t){let e=document.getElementById("btn-".concat(_));e==null||e.classList.remove("gold"),e==null||e.classList.add("gold-dark"),_=t,X();let n=document.getElementById("btn-".concat(t));n==null||n.classList.remove("gold-dark"),n==null||n.classList.add("gold")}function N(t={...tt}){localStorage.getItem("wallet_address")||delete t.nft,b=Object.keys(t);const e=document.getElementById("bottom-navigation");e.innerHTML="",b.forEach(n=>{let a="btn-".concat(n);e.insertAdjacentHTML("beforeend",`
            <div id="${a}" class="nav-img gold-dark" style="width: ${100/b.length}%">
                    <span class="material-symbols-outlined" >${t[n]}</span>

            </div>`),document.querySelector("#"+a).addEventListener("click",()=>{I(n)})}),I(_)}let f=window.Telegram.WebApp;function et(){f.isVerticalSwipesEnabled=!1,f.ready(),f.expand(),f.disableVerticalSwipes()}function nt(){return f.initData.trim()===""&&!h.tg_mode?(I("error_tg"),1):0}const r=new TON_CONNECT_UI.TonConnectUI({manifestUrl:"https://static.biptoken.xyz/MANIFEST.json",buttonRootId:"ton-connect",enableAndroidBackHandler:!0});r.uiOptions={twaReturnUrl:"https://t.me/BIPapp_bot",language:"ru",uiPreferences:{theme:"SYSTEM"}};r.onStatusChange(t=>{if(r.connected){const e=r.account.address;localStorage.setItem("wallet_address",e),h.tg_mode||axios.post(`https://api.biptoken.xyz/v1/auth/nuw?wallet_address=${e}&tgInitData=${encodeURIComponent(f.initData)}`)}else localStorage.setItem("wallet_address","");localStorage.setItem("wallet_connect",r.connected),K(),j(),N()});async function at(){try{await r.openModal()}catch{console.log("Invalid connect wallet")}N()}async function st(){await r.disconnect(),N()}let m={can:!1,token:void 0,amount:0};function x(t,e){let n=document.getElementById("btn_send_transaction");localStorage.setItem(`${e}_input_count`,"0");let a;if(!t||t<=0)n&&e!=="RUB"&&(n==null||n.classList.add("opacity-2"),n.value="Введите значение больше нуля"),a="0 BIPCoin",m.can=!1;else if(isNaN(t*1))n&&e!=="RUB"&&(n.classList.add("opacity-2"),n.value="Введено некорректное значение"),a="Некорректное значение",m.can=!1;else{a=`${lt(t,e)} BIPCoin`,localStorage.setItem(`${e}_input_count`,t);let s=localStorage.getItem(`${e}_balance`);t*1<=s?(n&&e!=="RUB"&&(n.classList.remove("opacity-2"),n.value=`Оплатить ${t*1} ${e}`),m.can=!0,m.token=e,m.amount=t):(m.can=!1,n&&e!=="RUB"&&(n.classList.add("opacity-2"),n.value="Недостаточно средств на кошельке"))}try{document.getElementById(`${e}_value`).innerHTML=a}catch{}it(t,e)}function lt(t,e){let n=localStorage.getItem("BIP_price");return e.toUpperCase()==="TON"&&(t*=localStorage.getItem("TON_price")),e.toUpperCase()==="RUB"&&(t/=localStorage.getItem("RUB_price")),Math.round(t/n*100)/100}function it(t,e){let n;t.length<=1?n="1rem":n=`${t.length*.5}rem`,document.getElementById(`${e}_input_count`).style.width=n}function ot(){g("send_to_crypto"),g("send_to_card");let t=document.getElementById("send_to_crypto_content"),e;if(!(r.connected||h.wallet_connect==="true"))e=t.innerHTML,t.innerHTML=D;else{e&&(t.innerHTML=e);let s=document.getElementById("TON_input_count");s.addEventListener("input",i=>{x(i.target.value,"TON")});let l=document.getElementById("USDT_input_count");l.addEventListener("input",i=>{x(i.target.value,"USDT")}),k||(l.type="text",s.type="text")}let n=document.getElementById("send_to_card_content"),a;if(!(r.connected||h.wallet_connect==="true"))a=n.innerHTML,n.innerHTML=D;else{a&&(n.innerHTML=a);let s=document.getElementById("RUB_input_count");s.addEventListener("input",i=>{x(i.target.value,"RUB")}),k||(s.type="text");let l;try{l=f.initDataUnsafe.user.id}catch{l="UserID"}document.getElementById("card_send_code").innerHTML=l,document.getElementById("admin_card_number").innerHTML=B.card}}let v={can:!1,amount:0};function j(){const t=document.getElementsByClassName("wallet_please_connect"),e=document.getElementsByClassName("wallet_access_connect");if(r.connected||h.wallet_connect==="true"){for(let s of t)s.classList.add("hide");for(let s of e)s.classList.remove("hide")}else{for(let s of t)s.classList.remove("hide");for(let s of e)s.classList.add("hide")}let n=document.getElementById("BIP_transfer_input_count"),a=document.getElementById("btn_send_transaction_to_sw");n==null||n.addEventListener("input",s=>{x(s.target.value,"BIP_transfer"),Number(s.target.value)<=u.balance&&s.target.value&&s.target.value!=="0"?a.classList.remove("opacity-2"):a.classList.add("opacity-2")}),!k&&n&&(n.type="text"),U(),dt(),ct()}function ct(){try{let t=u.balance;t&&(document.getElementById("sw_balance_num").innerHTML=Math.floor(t*1e3)/1e3)}catch(t){console.log(t)}}function dt(){try{let t=document.getElementById("sw_transactions_list");if(t&&u.transactions){let e=Object.keys(u.transactions).sort(),n="",a="",s="";for(const l of e.reverse()){let i=u.transactions[l],c=new Date(l*1e3).toLocaleString("ru-RU",{month:"long",day:"numeric"});s!==c&&(s=c,n+=a,a=`<p class="text-lg">${c}</p>`);let d=i.value>0;a+=`
                <div class="m-2 ml-4">
                    <p class="inline">${i.text}</p>
                    <p class="fl-r inline ${d?"green":""}">${d?"+":"-"}${Math.round(i.value*1e3)/1e3} BIP</p>
                </div>`}n+=`<div class="mt-4 trs-day">${a}</div>`,t.innerHTML!==n&&(t.innerHTML=n)}}catch(t){console.log(t)}}function U(){let t=localStorage.getItem("BIP_balance");const e=document.getElementById("BIP_balance");let n=localStorage.getItem("BIP_price");const a=document.getElementById("BIP_price");let s=localStorage.getItem("TON_balance");const l=document.getElementById("TON_balance");let i=localStorage.getItem("USDT_balance");const p=document.getElementById("USDT_balance");e&&(e.innerHTML=Math.floor(t*100)/100,l.innerHTML=Math.floor(s*100)/100,p.innerHTML=Math.floor(i*100)/100,a.innerHTML=Math.floor(n*100)/100)}let S=null;function rt(){document.addEventListener("touchstart",pt,!1),document.addEventListener("touchmove",_t,!1),document.addEventListener("keydown",t=>{t.key==="ArrowRight"&&R(),t.key==="ArrowLeft"&&z()})}function pt(t){S=t.touches[0].clientX,t.touches[0].clientY}function _t(t){if(!S)return;const e=t.touches[0].clientX;t.touches[0].clientY;const n=S-e;Math.abs(n)>window.screen.width/5&&(n>0?R():n<0&&z(),S=null)}const w=new window.TonWeb;async function F(t,e=!0){let n=new w.boc.Cell;return n.bits.writeUint(0,32),n.bits.writeString(t||""),e?w.utils.bytesToBase64(await n.toBoc()):n}async function mt(t,e,n=1,a=null){const s=w.utils.Address;let l=new w.boc.Cell;return l.bits.writeUint(260734629,32),l.bits.writeUint(Date.now(),64),l.bits.writeCoins(t),l.bits.writeAddress(new s(e)),l.bits.writeAddress(new s(localStorage.getItem("wallet_address"))),l.bits.writeUint(0,1),l.bits.writeCoins(n),a?(l.bits.writeUint(1,1),l.refs.push(F(a,!1))):l.bits.writeUint(0,1),w.utils.bytesToBase64(await l.toBoc())}async function ut(t,e=.15*1e9){const n=w.utils.Address;let a=new w.boc.Cell;return a.bits.writeUint(1607220500,32),a.bits.writeUint(Date.now(),64),a.bits.writeAddress(new n(t)),a.bits.writeAddress(new n(localStorage.getItem("wallet_address"))),a.bits.writeUint(0,1),a.bits.writeCoins(e),a.bits.writeUint(0,1),w.utils.bytesToBase64(await a.toBoc())}async function gt(t){return{validUntil:Math.floor(new Date/1e3)+360,messages:[{address:t,amount:.2*1e9,payload:await ut(B.nft_wallet)}]}}async function W(t,e,n=null){return{validUntil:Math.floor(new Date/1e3)+360,messages:[{address:t,amount:e*1e9,payload:await F(n)}]}}async function V(t,e,n,a=1e-9){return{validUntil:Math.floor(new Date/1e3)+360,messages:[{address:t,amount:(.06+a)*1e9,payload:await mt(n*1e9,e,a)}]}}async function ft(t,e){let n;if(t==="TON"?n=W(B.buy_wallet,e):t==="USDT"&&(n=V(localStorage.getItem("USDT_wallet_address"),B.buy_wallet,e*.001)),n)return await r.sendTransaction(await n)}async function bt(t){return V(localStorage.getItem("BIP_wallet_address"),B.nft_wallet,t,.15)}async function wt(t,e,n=null){return await r.sendTransaction(await W(t,e,n))}async function vt(t){return await r.sendTransaction(await gt(t))}async function yt(){document.addEventListener("click",async function(t){var e,n,a,s,l,i,p,c,d;if((e=t.target)!=null&&e.className.includes("btn_page_wallet")&&I("wallet"),(n=t.target)!=null&&n.className.includes("btn_wallet_connect")&&await at(),(a=t.target)!=null&&a.className.includes("btn_wallet_disconnect")&&await st(),((s=t.target)==null?void 0:s.id)==="btn_send_transaction"&&m.can&&(await ft(m.token,m.amount)?document.getElementById("btn_send_transaction").value="Транзакция обрабатывается":document.getElementById("btn_send_transaction").value="Ошибка при отправке транзакции"),((l=t.target)==null?void 0:l.id)==="btn_send_transaction_to_nft"&&v.can&&(await bt(v.amount)?document.getElementById("btn_send_transaction_to_nft").value="Транзакция обрабатывается":document.getElementById("btn_send_transaction_to_nft").value="Ошибка при отправке транзакции"),((i=t.target)==null?void 0:i.id)==="btn_send_transaction_to_sw"){let o=Number(localStorage.getItem("BIP_transfer_input_count"));o<=u.balance&&(await wt("UQB7q5qYhCOAIQbhWlIoq78ZXpGZWRn-gZc30-CSckZSMc_s",.05,o)?document.getElementById("btn_send_transaction_to_nft").value="Транзакция обрабатывается":document.getElementById("btn_send_transaction_to_nft").value="Ошибка при отправке транзакции")}if(((p=t.target)==null?void 0:p.id)==="copy_admin_card_number"){let o=document.getElementById("admin_card_number");o.classList.add("anim"),setTimeout(()=>o.classList.remove("anim"),1e3),await navigator.clipboard.writeText(o.innerHTML)}if(((c=t.target)==null?void 0:c.id)==="copy_card_send_code"){let o=document.getElementById("card_send_code");o.classList.add("anim"),setTimeout(()=>o.classList.remove("anim"),1e3),await navigator.clipboard.writeText(o.innerHTML)}if(((d=t.target)==null?void 0:d.classList.toString().split(" ").indexOf("BIP_NFT_sale_button"))!==-1)for(const o of T)o.index.toString()===t.target.id.split("_")[1]&&(console.log(o.address),console.log(T),await vt(o.address))})}let P=0;function It(){if(Number(localStorage.getItem("BIP_balance"))>0){let t=document.getElementById("BIP_input_count");t==null||t.addEventListener("input",e=>{x(e.target.value,"BIP")}),!k&&t&&(t.type="text")}C()}function C(){var t,e,n,a,s;try{if(localStorage.getItem("BIP_balance")>0?((t=document.getElementById("BIP_input_count"))==null||t.addEventListener("input",l=>{ht(l.target.value)}),(e=document.getElementById("changer_BIP2NFT"))==null||e.classList.remove("hide")):(n=document.getElementById("changer_BIP2NFT"))==null||n.classList.add("hide"),T.length!==0){let l=document.getElementById("wallet_nft_list"),i=1,p="";T.forEach(c=>{let d=c.metadata.name;d==="BIP NFT"&&(d=c.metadata.attributes[0].value.toString()+" "+d);let o=`BIPNFT_${c.index}`;p+=`
            <div class="flex text-lg mt-2">
            <p class="mr-2 text-down">${i}.</p>
            <p class="mr-2 text-down">${d}</p>
            <input type="button" class="input_btn BIP_NFT_sale_button" id="${o}" value="Продать">
            <img src="${c.previews[1].url}" alt="${o}" class="size-8 r-0" id="${o}" >
            </div>
            `,i++}),l&&(l==null?void 0:l.innerHTML)!==p&&(l.innerHTML=p),(a=document.getElementById("changer_NFT2BIP"))==null||a.classList.remove("hide")}else(s=document.getElementById("changer_NFT2BIP"))==null||s.classList.add("hide")}catch(l){console.log(l),setTimeout(C,500)}}function ht(t){let e=document.getElementById("btn_send_transaction_to_nft");if(localStorage.setItem("BIP_input_count","0"),!t||t<=0)e&&(e==null||e.classList.add("opacity-2"),e.value="Введите значение больше нуля"),document.getElementById("BIP_input_count").innerHTML="0 BIPCoin",v.can=!1,E();else if(isNaN(t*1))e&&(e.classList.add("opacity-2"),e.value="Некорректное значение"),document.getElementById("BIP_input_count").innerHTML="Некорректное значение",v.can=!1,E();else{document.getElementById("BIP_input_count").innerHTML=`${t} BIPCoin`,localStorage.setItem("BIP_input_count",t),E(t);let a=localStorage.getItem("BIP_balance");t*1<=a?(e&&(e.classList.remove("opacity-2"),e.value="Получить NFT"),v.can=!0,v.amount=t):(v.can=!1,e&&(e.classList.add("opacity-2"),e.value="Недостаточно средств"))}let n;t.length<=1?n="1rem":n=`${t.length*.5}rem`,document.getElementById("BIP_input_count").style.width=n}function E(t=0){let e=document.getElementById("nft_preshow_img");if(t<=0){e.classList.add("hide");return}P===t||new Array(e.classList).toString().split(" ").indexOf("hide")===-1&&(t>=1e4&&P>=1e4||t<=99&&P<=99)||(P=t,axios.get(`https://nft.biptoken.xyz/CreateItemMetadata?value=${t}`,{responseType:"json",transformResponse:a=>a}).then(a=>{let s=document.getElementById("wallet_nft_items").scrollHeight;e.style.height=`${s+Et(1)-2}px`;let l=JSON.parse(a.data).image;l!==e.src&&(e.src=l),e.classList.remove("hide")}).catch(a=>{console.error(`Got a bad format response with status code ${a.response.status}: ${a.response.data}`)}))}let h={},T=[],B,k,u={};const Bt="0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe",xt="0:786e74bba071d57c75004bb41bf978ea73e00b03f3f3fbf2b73ea0426f97d6e9",q={BIP:xt,USDT:Bt};function Tt(){let t=location.search.substring(1).split("&");for(let e=0;e<t.length;e++){let n=t[e].split("=");h[n[0]]=n[1]}}function kt(t=f.initData){if(!t)return u;axios.get("https://api.biptoken.xyz/v1/wallet/info",{params:{tgInitData:t}}).then(e=>{e.data.op==="0"&&(u=e.data.data)}).finally(()=>u)}function Pt(t,e,...n){return t(...n),setInterval(t,e,...n)}function Lt(){axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then(t=>{localStorage.setItem("RUB_price",t.data.Valute.USD.Value)}).finally(()=>localStorage.getItem("RUB_price"))}function St(){axios.get("https://api.coingecko.com/api/v3/coins/the-open-network").then(t=>{localStorage.setItem("TON_price",t.data.market_data.current_price.usd)}).finally(()=>localStorage.getItem("TON_price"))}function Nt(){axios.get("https://api.geckoterminal.com/api/v2/networks/ton/pools/EQCJWbehGyHtkgw6IMzcY1VPAJwre1sWWGvqKYm1_h0CpsJe").then(e=>{localStorage.setItem("BIP_price",e.data.data.attributes.base_token_price_quote_token)}).finally(()=>localStorage.getItem("BIP_price"))}function K(){let t=localStorage.getItem("wallet_address");if(t)axios.get(`https://tonapi.io/v2/accounts/${t}/jettons`).then(e=>{axios.get(`https://tonapi.io/v2/accounts/${localStorage.getItem("wallet_address")}/nfts?collection=EQDhO_YVxvb3p68hqte0kNG5jdO44WQFgWdCe8GvgVkrws4Z`).then(n=>{T=n.data.nft_items,C()});for(let n of e.data.balances)for(let[a,s]of Object.entries(q))n.jetton.address===s&&(localStorage.setItem(`${a}_balance`,n.balance/10**n.jetton.decimals),localStorage.setItem(`${a}_wallet_address`,n.wallet_address.address));U()}),axios.get(`https://tonapi.io/v2/accounts/${t}`).then(e=>{localStorage.setItem("TON_balance",e.data.balance/10**9)}).catch(e=>{localStorage.setItem("TON_balance",0)}).finally(()=>{U()});else{localStorage.setItem("TON_balance",0);for(let[e,n]of Object.entries(q))localStorage.setItem(`${e}_balance`,"0"),localStorage.setItem(`${e}_wallet_address`,"")}}function Et(t){return t*parseFloat(getComputedStyle(document.documentElement).fontSize)}let L={};function g(t){let e=document.getElementById(`${t}_arrow`),n=document.getElementById(`${t}_content`);L[t]=0,e.addEventListener("click",()=>{L[t]?(e.innerHTML="keyboard_arrow_down",n.classList.add("hide"),L[t]=0):(e.innerHTML="keyboard_arrow_up",n.classList.remove("hide"),L[t]=1)})}async function Ut(){await yt(),et(),rt(),document.querySelectorAll(".material-symbols-outlined").forEach(n=>{n.classList.add("icon-load")}),document.fonts.ready.then(()=>{document.querySelectorAll(".material-symbols-outlined").forEach(n=>{n.classList.remove("icon-load")})});const t=document.querySelector("#root"),e=document.createElement("div");e.id="bottom-navigation",t.appendChild(e),setInterval(Lt,20*60*1e3),setInterval(St,60*1e3),setInterval(Nt,60*1e3),Pt(kt,10*1e3),setInterval(K,10*1e3),await axios.get("https://api.biptoken.xyz/v1/info/payments").then(n=>{n.status===200&&(B=n.data)}),k=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}async function Ct(){document.addEventListener("click",async function(t){var e,n,a,s,l,i,p,c,d,o,M,O,$;(e=t.target)!=null&&e.className.includes("link-biptoken")&&window.open("https://t.me/BIPholders","_blank"),(n=t.target)!=null&&n.className.includes("link-tg-how-to-buy")&&window.open("https://t.me/BIPholders/6","_blank"),(a=t.target)!=null&&a.className.includes("link-bipizm")&&window.open("https://t.me/BIPuserchat","_blank"),(s=t.target)!=null&&s.className.includes("link-biplions")&&window.open("https://t.me/biplions1","_blank"),(l=t.target)!=null&&l.className.includes("link-tgbot")&&window.open("https://t.me/BIPapp_bot?start=app","_blank"),(i=t.target)!=null&&i.className.includes("link-baltinvestproject")&&window.open("https://t.me/BaltInvestProekt","_blank"),(p=t.target)!=null&&p.className.includes("link-how-buy-usdt-on-wallet")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-ili-lyuboj-drugoj-token-12-04","_blank"),(c=t.target)!=null&&c.className.includes("link-how-buy-usdt-on-CEX")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-na-Birzhe-12-04","_blank"),(d=t.target)!=null&&d.className.includes("link-how-buy-verif-on-CEX")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-verifikaciyu-na-Birzhe-12-04","_blank"),(o=t.target)!=null&&o.className.includes("link-how-buy-rub")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-RUB-12-04","_blank"),(M=t.target)!=null&&M.className.includes("link-how-sell-rub")&&window.open("https://telegra.ph/Kak-prodat-BIPCoin-02-08","_blank"),(O=t.target)!=null&&O.className.includes("link-how-create-tk")&&window.open("https://telegra.ph/Kak-sozdat-svoj-koshelek-Tonkeeper-12-16","_blank"),($=t.target)!=null&&$.className.includes("link-baltinvestpro-stats")&&window.open("https://www.rusprofile.ru/id/4405609","_blank")})}function A(){g("faq"),g("faq_get_bip"),g("faq_why_we_work"),g("faq_how_bip_work"),g("faq_how_much_pay"),g("faq_details"),document.getElementById("faq_arrow").addEventListener("click",()=>{document.getElementById("faq").classList.toggle("inline")})}const y=document.querySelector("#page");function X(){_==="info"?(y.innerHTML=H,A()):_==="wallet"?(y.innerHTML=Y,j()):_==="nft"?(y.innerHTML=G,It()):_==="cart"?(y.innerHTML=Q,ot()):_==="book"?y.innerHTML=J:_==="error_tg"&&(y.innerHTML=H+Z,A())}async function Mt(){Tt(),await Ct(),nt()||(await Ut(),N(),X())}(async()=>document.addEventListener("DOMContentLoaded",async()=>Mt()))();
