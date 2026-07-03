(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const z=`
    <div id="error_connect_wallet">
        <p class="text-lg">Сначала подключите <span class="gold site-link btn_page_wallet">кошелек</span></p>
    </div>`,F=`
    <div id="info">
        <div class="message-cloud">
            <p class="text-center text-sm text-hint mt-1">
                <span class="gold font-bold text-3xl m-0 ml-4">BIPCoin</span> - первая цифровая монета, привязанная к экономической деятельности реальной компании, работающей в области строительства уже более 15 лет.</p>
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
                    Вы покупаете BIPCoin себе на криптокошелек.<br>
                    Мы ежесуточно (в 00.00 по Гринвичу) начисляем Вам 0,083% на  сумму токенов, которые находятся у Вас в кошельке более одних суток. <br><br>
                    <span class="red">Внимание!</span> Для получения процентов на токены, они должны находится у Вас на кошельке больше суток!<br><br>
                    Так как переводы в криптовалюте требуют комиссии, то накопление полученных процентов происходит именно в приложении. <span class="btn_page_wallet gold site-link">Вывести</span> их на свой кошелек Вы можете в любой момент, оплатив комиссию сети. Она, как правило небольшая и составляет приблизительно 0.05 TON <br><br>
                    <span class="red">Важно!</span> Начисление процентов происходит на сумму токенов в Вашем криптокошельке, а не в приложении, то есть, чтобы начать получать проценты на уже полученные проценты их необходимо вывести на кошелек.<br>
                    Продать BIPCoin Вы можете в любой момент через <span class="site-link link-how-sell-rub gold">dedust</span>.
                    </p>
                </div>
            
                <div class="flex mt-1 mb-1">
                    <p class="text-lg gold">Что мы предлагаем? </p>
                    <span class="size-8 material-symbols-outlined" id="faq_what_we_suggest_arrow">keyboard_arrow_down</span>
                </div>
                <div class="hide ml-4 mt-1" id="faq_what_we_suggest_content">
                    <p>
                    По сути, ближайшим аналогом нашего токена являются облигации различных компаний, размещаемые, например, на биржах. Мы аналогично размещаем BIPCoin в свободной продаже и гарантируем прибыль по ним в размере не менее 30% годовых с ежедневным начислением процентов. <br>
                    При этом есть несколько важных отличий: <br><br>
                    у облигаций, как правило, есть цена и срок выкупа, у BIPCoin цена рыночная, что позволяет заработать не только на выплатах процентов, но и на росте цены токена, то есть в этом вопросе мы ближе к акциям компаний.<br>
                    Начисление процентов происходит в токенах, что также увеличивает доход, так как на уже полученные на криптокошелек проценты, будет так же начисляться 30% годовых.
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
                
                <div class="hide flex mt-1 mb-1">
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
                    <p class="text-lg gold">Почему именно 30% годовых?</p>
                    <span class="size-8 material-symbols-outlined" id="faq_why_30_percents_arrow">keyboard_arrow_down</span>
                </div>
                <div class="hide ml-4 mt-1" id="faq_why_30_percents_content">
                    <p>
                    Стандартные банковские депозиты в текущей экономической ситуации приносят приблизительно 18-22% годовых. Мы предлагаем более выгодные условия, понимая, что наше предложение выглядит не таким надежным, как банковский вклад. Таким образом, предлагать менее 30% годовых мы не можем. Предлагать более 30% годовых мы тоже не готовы, так как не строим никаких пирамид, в том числе финансовых, понимаем цену денег и как мы их зарабатываем. Гарантировать существенно больший процент - это однозначно рисковать, а мы предпочитаем стабильность.<br><br> 
                    Здесь необходимо отметить, что получение более 30% годовых все же возможно в некоторых случаях:<br>
                     - рост цены токена<br>
                     - Начисление процентов на проценты <br><br>
                    Достижение нашей компанией определенных целевых показателей по выручке и прибыли по итогам каждого финансового квартала. Об этом мы гораздо подробнее расскажем позже.
                    </p>
                </div>
                
                
                <div class="flex mt-1 mb-1">
                    <p class="text-lg gold">Сколько всего будет продано BIPCoin</p>
                    <span class="size-8 material-symbols-outlined" id="faq_how_much_total_BIPCoin_arrow">keyboard_arrow_down</span>
                </div>
                <div class="hide ml-4 mt-1" id="faq_how_much_total_BIPCoin_content">
                    <p>
                    Общее количество токенов - 1 млн, но 500 000 мы специально <span class="link-NFT-lock-500k site-link gold">заморозили</span> на год.
                    </p>
                </div>
                
                <div class="hide flex mt-1 mb-1">
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
                <p class="text-2xl">Баланс виртуального кошелька</p>
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
`,Z=`
    <div id="nft">
        <div class="message-cloud">
            <p class="text-3xl gold font-bold text-center m-0">
            NFT
            </p>
        </div>
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
`,tt=`
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
    `,et=`
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
    </div>`,nt=`
    <div id = "error-tg">
        <br>
        <div class="message-cloud mt-8">
            <p class="p-4 text-3xl font-bold text-center">Больше информации в нашем <span class="site-link link-tgbot gold">Telegram-боте</span>.</p>
        </div>
    </div>`;let m="info",b;const at={info:"info",wallet:"account_balance_wallet",nft:"savings",cart:"shopping_cart",book:"import_contacts"};function j(){let t=b.indexOf(m)+1;t<b.length&&B(b[t])}function K(){let t=b.indexOf(m)-1;t>=0&&B(b[t])}function B(t){let e=document.getElementById("btn-".concat(m));e==null||e.classList.remove("gold"),e==null||e.classList.add("gold-dark"),m=t,Y();let n=document.getElementById("btn-".concat(t));n==null||n.classList.remove("gold-dark"),n==null||n.classList.add("gold")}function U(t={...at}){localStorage.getItem("wallet_address")||delete t.nft,b=Object.keys(t);const e=document.getElementById("bottom-navigation");e.innerHTML="",b.forEach(n=>{let s="btn-".concat(n);e.insertAdjacentHTML("beforeend",`
            <div id="${s}" class="nav-img gold-dark" style="width: ${100/b.length}%">
                    <span class="material-symbols-outlined" >${t[n]}</span>

            </div>`),document.querySelector("#"+s).addEventListener("click",()=>{B(n)})}),B(m)}let g=window.Telegram.WebApp;function st(){g.isVerticalSwipesEnabled=!1,g.ready(),g.expand(),g.disableVerticalSwipes()}function lt(){return g.initData.trim()===""&&!x.tg_mode?(B("error_tg"),1):0}const d=new TON_CONNECT_UI.TonConnectUI({manifestUrl:"https://static.biptoken.xyz/MANIFEST.json",buttonRootId:"ton-connect",enableAndroidBackHandler:!0});d.uiOptions={twaReturnUrl:"https://t.me/BIPapp_bot",language:"ru",uiPreferences:{theme:"SYSTEM"}};d.onStatusChange(t=>{if(d.connected){const e=d.account.address;localStorage.setItem("wallet_address",e),x.tg_mode||axios.post(`https://api.biptoken.xyz/v1/auth/nuw?wallet_address=${e}&tgInitData=${encodeURIComponent(g.initData)}`)}else localStorage.setItem("wallet_address","");localStorage.setItem("wallet_connect",d.connected),G(),W(),U()});async function it(){try{await d.openModal()}catch{console.log("Invalid connect wallet")}U()}async function ot(){await d.disconnect(),U()}let f={can:!1,token:void 0,amount:0};function T(t,e){let n=document.getElementById("btn_send_transaction");localStorage.setItem(`${e}_input_count`,"0");let s;if(!t||t<=0)n&&e!=="RUB"&&(n==null||n.classList.add("opacity-2"),n.value="Введите значение больше нуля"),s="0 BIPCoin",f.can=!1;else if(isNaN(t*1))n&&e!=="RUB"&&(n.classList.add("opacity-2"),n.value="Введено некорректное значение"),s="Некорректное значение",f.can=!1;else{s=`${ct(t,e)} BIPCoin`,localStorage.setItem(`${e}_input_count`,t);let a=localStorage.getItem(`${e}_balance`);t*1<=a?(n&&e!=="RUB"&&(n.classList.remove("opacity-2"),n.value=`Оплатить ${t*1} ${e}`),f.can=!0,f.token=e,f.amount=t):(f.can=!1,n&&e!=="RUB"&&(n.classList.add("opacity-2"),n.value="Недостаточно средств на кошельке"))}try{document.getElementById(`${e}_value`).innerHTML=s}catch{}dt(t,e)}function ct(t,e){let n=localStorage.getItem("BIP_price");return e.toUpperCase()==="TON"&&(t*=localStorage.getItem("TON_price")),e.toUpperCase()==="RUB"&&(t/=localStorage.getItem("RUB_price")),Math.round(t/n*100)/100}function dt(t,e){let n;t.length<=1?n="1rem":n=`${t.length*.5}rem`,document.getElementById(`${e}_input_count`).style.width=n}function rt(){_("send_to_crypto"),_("send_to_card");let t=document.getElementById("send_to_crypto_content"),e;if(!(d.connected||x.wallet_connect==="true"))e=t.innerHTML,t.innerHTML=z;else{e&&(t.innerHTML=e);let a=document.getElementById("TON_input_count");a.addEventListener("input",i=>{T(i.target.value,"TON")});let l=document.getElementById("USDT_input_count");l.addEventListener("input",i=>{T(i.target.value,"USDT")}),P||(l.type="text",a.type="text")}let n=document.getElementById("send_to_card_content"),s;if(!(d.connected||x.wallet_connect==="true"))s=n.innerHTML,n.innerHTML=z;else{s&&(n.innerHTML=s);let a=document.getElementById("RUB_input_count");a.addEventListener("input",i=>{T(i.target.value,"RUB")}),P||(a.type="text");let l;try{l=g.initDataUnsafe.user.id}catch{l="UserID"}document.getElementById("card_send_code").innerHTML=l,document.getElementById("admin_card_number").innerHTML=h.card}}let w={can:!1,amount:0};function W(){const t=document.getElementsByClassName("wallet_please_connect"),e=document.getElementsByClassName("wallet_access_connect");if(d.connected||x.wallet_connect==="true"){for(let a of t)a.classList.add("hide");for(let a of e)a.classList.remove("hide")}else{for(let a of t)a.classList.remove("hide");for(let a of e)a.classList.add("hide")}let n=document.getElementById("BIP_transfer_input_count"),s=document.getElementById("btn_send_transaction_to_sw");n==null||n.addEventListener("input",a=>{T(a.target.value,"BIP_transfer"),Number(a.target.value)<=u.balance&&a.target.value&&a.target.value!=="0"?s.classList.remove("opacity-2"):s.classList.add("opacity-2")}),!P&&n&&(n.type="text"),M()}function M(){mt(),_t(),pt()}function pt(){try{let t=u.balance;if(t||t===0){let e=document.getElementById("sw_balance_num");e&&(e.innerHTML=Math.floor(t*1e3)/1e3)}}catch(t){console.log(t)}}function _t(){try{let t=document.getElementById("sw_transactions_list");if(t&&u.transactions){let e=Object.keys(u.transactions).sort(),n="",s="",a="";for(const l of e.reverse()){let i=u.transactions[l];if(i.value!==0){let c=new Date(l*1e3).toLocaleString("ru-RU",{month:"long",day:"numeric"});a!==c&&(a=c,n+=s,s=`<p class="text-lg">${c}</p>`);let r=i.value>0;s+=`
                    <div class="m-2 ml-4">
                        <p class="inline">${i.text}</p>
                        <p class="fl-r inline ${r?"green":""}">${r?"+":"-"}${Math.round(Math.abs(i.value)*1e3)/1e3} BIP</p>
                    </div>`}}n+=`<div class="mt-4 trs-day">${s}</div>`,t.innerHTML!==n&&(t.innerHTML=n)}}catch(t){console.log(t)}}function mt(){let t=localStorage.getItem("BIP_balance");const e=document.getElementById("BIP_balance");let n=localStorage.getItem("BIP_price");const s=document.getElementById("BIP_price");let a=localStorage.getItem("TON_balance");const l=document.getElementById("TON_balance");let i=localStorage.getItem("USDT_balance");const p=document.getElementById("USDT_balance");e&&(e.innerHTML=Math.floor(t*100)/100,l.innerHTML=Math.floor(a*100)/100,p.innerHTML=Math.floor(i*100)/100,s.innerHTML=Math.floor(n*100)/100)}let E=null;function ut(){document.addEventListener("touchstart",ft,!1),document.addEventListener("touchmove",gt,!1),document.addEventListener("keydown",t=>{t.key==="ArrowRight"&&j(),t.key==="ArrowLeft"&&K()})}function ft(t){E=t.touches[0].clientX,t.touches[0].clientY}function gt(t){if(!E)return;const e=t.touches[0].clientX;t.touches[0].clientY;const n=E-e;Math.abs(n)>window.screen.width/5&&(n>0?j():n<0&&K(),E=null)}const v=new window.TonWeb,y=v.utils.Address;async function V(t,e=!0){let n=new v.boc.Cell;return n.bits.writeUint(0,32),n.bits.writeString(t||""),e?v.utils.bytesToBase64(await n.toBoc()):n}async function bt(t,e,n=1,s=null){let a=new v.boc.Cell;return a.bits.writeUint(260734629,32),a.bits.writeUint(Date.now(),64),a.bits.writeCoins(t),a.bits.writeAddress(new y(e)),a.bits.writeAddress(new y(localStorage.getItem("wallet_address"))),a.bits.writeUint(0,1),a.bits.writeCoins(n),s?(a.bits.writeUint(1,1),a.refs.push(V(s,!1))):a.bits.writeUint(0,1),v.utils.bytesToBase64(await a.toBoc())}async function wt(t,e=.15*1e9){let n=new v.boc.Cell;return n.bits.writeUint(1607220500,32),n.bits.writeUint(Date.now(),64),n.bits.writeAddress(new y(t)),n.bits.writeAddress(new y(localStorage.getItem("wallet_address"))),n.bits.writeUint(0,1),n.bits.writeCoins(e),n.bits.writeUint(0,1),v.utils.bytesToBase64(await n.toBoc())}async function vt(t){const e=new y(t).toString(!0,!0,!0);return{validUntil:Math.floor(new Date/1e3)+4*60,messages:[{address:e,amount:(.2*1e9).toString(),payload:await wt(h.nft_wallet)}]}}async function X(t,e,n=null){const s=new y(t).toString(!0,!0,!0);return{validUntil:Math.floor(new Date/1e3)+4*60,messages:[{address:s,amount:(e*1e9).toString(),payload:await V(n)}]}}async function Q(t,e,n,s=1e-9){const a=new y(t).toString(!0,!0,!0);return{validUntil:Math.floor(new Date/1e3)+4*60,messages:[{address:a,amount:((.06+s)*1e9).toString(),payload:await bt(n*1e9,e,s*1e9)}]}}async function yt(t,e){let n;if(t==="TON"?n=X(h.buy_wallet,e):t==="USDT"&&(n=Q(localStorage.getItem("USDT_wallet_address"),h.buy_wallet,e*.001)),n)return await d.sendTransaction(await n)}async function ht(t){return await d.sendTransaction(await Q(localStorage.getItem("BIP_wallet_address"),h.nft_wallet,t,.15))}async function It(t,e,n=null){return await d.sendTransaction(await X(t,e,n))}async function Bt(t){return await d.sendTransaction(await vt(t))}async function xt(){document.addEventListener("click",async function(t){var e,n,s,a,l,i,p,c,r;if((e=t.target)!=null&&e.className.includes("btn_page_wallet")&&B("wallet"),(n=t.target)!=null&&n.className.includes("btn_wallet_connect")&&await it(),(s=t.target)!=null&&s.className.includes("btn_wallet_disconnect")&&await ot(),((a=t.target)==null?void 0:a.id)==="btn_send_transaction"&&f.can&&(await yt(f.token,f.amount)?document.getElementById("btn_send_transaction").value="Транзакция обрабатывается":document.getElementById("btn_send_transaction").value="Ошибка при отправке транзакции"),((l=t.target)==null?void 0:l.id)==="btn_send_transaction_to_nft"&&w.can&&(await ht(w.amount)?document.getElementById("btn_send_transaction_to_nft").value="Транзакция обрабатывается":document.getElementById("btn_send_transaction_to_nft").value="Ошибка при отправке транзакции"),((i=t.target)==null?void 0:i.id)==="btn_send_transaction_to_sw"){let o=Number(localStorage.getItem("BIP_transfer_input_count"));o<=u.balance&&(await It(h.sw_cash_out,.05,o)?document.getElementById("btn_send_transaction_to_sw").value="Транзакция обрабатывается":document.getElementById("btn_send_transaction_to_sw").value="Ошибка при отправке транзакции")}if(((p=t.target)==null?void 0:p.id)==="copy_admin_card_number"){let o=document.getElementById("admin_card_number");o.classList.add("anim"),setTimeout(()=>o.classList.remove("anim"),1e3),await navigator.clipboard.writeText(o.innerHTML)}if(((c=t.target)==null?void 0:c.id)==="copy_card_send_code"){let o=document.getElementById("card_send_code");o.classList.add("anim"),setTimeout(()=>o.classList.remove("anim"),1e3),await navigator.clipboard.writeText(o.innerHTML)}if(((r=t.target)==null?void 0:r.classList.toString().split(" ").indexOf("BIP_NFT_sale_button"))!==-1)for(const o of k)o.index.toString()===t.target.id.split("_")[1]&&(console.log(o.address),console.log(k),await Bt(o.address))})}let L=0;function Tt(){if(Number(localStorage.getItem("BIP_balance"))>0){let t=document.getElementById("BIP_input_count");t==null||t.addEventListener("input",e=>{T(e.target.value,"BIP")}),!P&&t&&(t.type="text")}O()}function O(){var t,e,n,s,a;try{if(localStorage.getItem("BIP_balance")>0?((t=document.getElementById("BIP_input_count"))==null||t.addEventListener("input",l=>{kt(l.target.value)}),(e=document.getElementById("changer_BIP2NFT"))==null||e.classList.remove("hide")):(n=document.getElementById("changer_BIP2NFT"))==null||n.classList.add("hide"),k.length!==0){let l=document.getElementById("wallet_nft_list"),i=1,p="";k.forEach(c=>{let r=c.metadata.name;r==="BIP NFT"&&(r=c.metadata.attributes[0].value.toString()+" "+r);let o=`BIPNFT_${c.index}`;p+=`
            <div class="flex text-lg mt-2">
            <p class="mr-2 text-down">${i}.</p>
            <p class="mr-2 text-down">${r}</p>
            <input type="button" class="input_btn BIP_NFT_sale_button" id="${o}" value="Продать">
            <img src="${c.previews[1].url}" alt="${o}" class="size-8 r-0" id="${o}" >
            </div>
            `,i++}),l&&(l==null?void 0:l.innerHTML)!==p&&(l.innerHTML=p),(s=document.getElementById("changer_NFT2BIP"))==null||s.classList.remove("hide")}else(a=document.getElementById("changer_NFT2BIP"))==null||a.classList.add("hide")}catch(l){console.log(l),setTimeout(O,500)}}function kt(t){let e=document.getElementById("btn_send_transaction_to_nft");if(localStorage.setItem("BIP_input_count","0"),!t||t<=0)e&&(e==null||e.classList.add("opacity-2"),e.value="Введите значение больше нуля"),document.getElementById("BIP_input_count").innerHTML="0 BIPCoin",w.can=!1,C();else if(isNaN(t*1))e&&(e.classList.add("opacity-2"),e.value="Некорректное значение"),document.getElementById("BIP_input_count").innerHTML="Некорректное значение",w.can=!1,C();else{document.getElementById("BIP_input_count").innerHTML=`${t} BIPCoin`,localStorage.setItem("BIP_input_count",t),C(t);let s=localStorage.getItem("BIP_balance");t*1<=s?(e&&(e.classList.remove("opacity-2"),e.value="Получить NFT"),w.can=!0,w.amount=t):(w.can=!1,e&&(e.classList.add("opacity-2"),e.value="Недостаточно средств"))}let n;t.length<=1?n="1rem":n=`${t.length*.5}rem`,document.getElementById("BIP_input_count").style.width=n}function C(t=0){let e=document.getElementById("nft_preshow_img");if(t<=0){e.classList.add("hide");return}L===t||new Array(e.classList).toString().split(" ").indexOf("hide")===-1&&(t>=1e4&&L>=1e4||t<=99&&L<=99)||(L=t,axios.get(`https://nft.biptoken.xyz/CreateItemMetadata?value=${t}`,{responseType:"json",transformResponse:s=>s}).then(s=>{let a=document.getElementById("wallet_nft_items").scrollHeight;e.style.height=`${a+Ct(1)-2}px`;let l=JSON.parse(s.data).image;l!==e.src&&(e.src=l),e.classList.remove("hide")}).catch(s=>{console.error(`Got a bad format response with status code ${s.response.status}: ${s.response.data}`)}))}let x={},k=[],h,P,u={};const Pt="0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe",Lt="0:786e74bba071d57c75004bb41bf978ea73e00b03f3f3fbf2b73ea0426f97d6e9",A={BIP:Lt,USDT:Pt};function St(){let t=location.search.substring(1).split("&");for(let e=0;e<t.length;e++){let n=t[e].split("=");x[n[0]]=n[1]}}function Nt(t=g.initData){if(!t)return u;axios.get("https://api.biptoken.xyz/v1/wallet/info",{params:{tgInitData:t}}).then(e=>{e.data.op==="0"?u=e.data.data:u={balance:0,transactions:{}}}).finally(()=>u)}function S(t,e,...n){return t(...n),setInterval(t,e,...n)}function Et(){try{axios.get("https://api.biptoken.xyz/v1/price/tokens").then(t=>{t.status===200?(localStorage.setItem("BIP_price",t.data.bip),localStorage.setItem("TON_price",t.data.ton),localStorage.setItem("RUB_price",t.data.rub)):console.log(t)})}catch(t){console.log(t)}}async function Ut(){await axios.get("https://api.biptoken.xyz/v1/info/payments").then(t=>{t.status===200&&(h=t.data)})}function G(){let t=localStorage.getItem("wallet_address");if(t)axios.get(`https://tonapi.io/v2/accounts/${t}/jettons`).then(e=>{axios.get(`https://tonapi.io/v2/accounts/${localStorage.getItem("wallet_address")}/nfts?collection=EQDhO_YVxvb3p68hqte0kNG5jdO44WQFgWdCe8GvgVkrws4Z`).then(n=>{k=n.data.nft_items,O()});for(let n of e.data.balances)for(let[s,a]of Object.entries(A))n.jetton.address===a&&(localStorage.setItem(`${s}_balance`,n.balance/10**n.jetton.decimals),localStorage.setItem(`${s}_wallet_address`,n.wallet_address.address));M()}),axios.get(`https://tonapi.io/v2/accounts/${t}`).then(e=>{localStorage.setItem("TON_balance",e.data.balance/10**9)}).catch(e=>{localStorage.setItem("TON_balance",0)}).finally(()=>{M()});else{localStorage.setItem("TON_balance",0);for(let[e,n]of Object.entries(A))localStorage.setItem(`${e}_balance`,"0"),localStorage.setItem(`${e}_wallet_address`,"")}}function Ct(t){return t*parseFloat(getComputedStyle(document.documentElement).fontSize)}let N={};function _(t){let e=document.getElementById(`${t}_arrow`),n=document.getElementById(`${t}_content`);N[t]=0,e.addEventListener("click",()=>{N[t]?(e.innerHTML="keyboard_arrow_down",n.classList.add("hide"),N[t]=0):(e.innerHTML="keyboard_arrow_up",n.classList.remove("hide"),N[t]=1)})}async function Mt(){S(Et,60*1e3),S(Nt,10*1e3),S(G,10*1e3),S(Ut,20*60*1e3)}async function Ot(){await xt(),st(),ut(),document.querySelectorAll(".material-symbols-outlined").forEach(n=>{n.classList.add("icon-load")}),document.fonts.ready.then(()=>{document.querySelectorAll(".material-symbols-outlined").forEach(n=>{n.classList.remove("icon-load")})});const t=document.querySelector("#root"),e=document.createElement("div");e.id="bottom-navigation",t.appendChild(e),P=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}async function $t(){document.addEventListener("click",async function(t){var e,n,s,a,l,i,p,c,r,o,$,H,D,q;(e=t.target)!=null&&e.className.includes("link-biptoken")&&window.open("https://t.me/BIPholders","_blank"),(n=t.target)!=null&&n.className.includes("link-tg-how-to-buy")&&window.open("https://t.me/BIPholders/6","_blank"),(s=t.target)!=null&&s.className.includes("link-bipizm")&&window.open("https://t.me/BIPuserchat","_blank"),(a=t.target)!=null&&a.className.includes("link-biplions")&&window.open("https://t.me/biplions1","_blank"),(l=t.target)!=null&&l.className.includes("link-tgbot")&&window.open("https://t.me/BIPapp_bot?start=app","_blank"),(i=t.target)!=null&&i.className.includes("link-baltinvestproject")&&window.open("https://t.me/BaltInvestProekt","_blank"),(p=t.target)!=null&&p.className.includes("link-how-buy-usdt-on-wallet")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-ili-lyuboj-drugoj-token-12-04","_blank"),(c=t.target)!=null&&c.className.includes("link-how-buy-usdt-on-CEX")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-USDT-ili-TON-na-Birzhe-12-04","_blank"),(r=t.target)!=null&&r.className.includes("link-how-buy-verif-on-CEX")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-verifikaciyu-na-Birzhe-12-04","_blank"),(o=t.target)!=null&&o.className.includes("link-how-buy-rub")&&window.open("https://telegra.ph/Kak-kupit-BIP-imeya-RUB-12-04","_blank"),($=t.target)!=null&&$.className.includes("link-how-sell-rub")&&window.open("https://telegra.ph/Kak-prodat-BIPCoin-02-08","_blank"),(H=t.target)!=null&&H.className.includes("link-how-create-tk")&&window.open("https://telegra.ph/Kak-sozdat-svoj-koshelek-Tonkeeper-12-16","_blank"),(D=t.target)!=null&&D.className.includes("link-baltinvestpro-stats")&&window.open("https://www.rusprofile.ru/id/4405609","_blank"),(q=t.target)!=null&&q.className.includes("link-NFT-lock-500k")&&window.open("https://tonviewer.com/EQAMKtgKB4QVDFx5Krl4Z5QM8-j5UULNaHGcZHJRjIf4o1SL","_blank")})}function R(){_("faq"),_("faq_get_bip"),_("faq_why_we_work"),_("faq_how_bip_work"),_("faq_how_much_pay"),_("faq_what_we_suggest"),_("faq_why_30_percents"),_("faq_how_much_total_BIPCoin"),_("faq_details"),document.getElementById("faq_arrow").addEventListener("click",()=>{document.getElementById("faq").classList.toggle("inline")})}const I=document.querySelector("#page");function Y(){m==="info"?(I.innerHTML=F,R()):m==="wallet"?(I.innerHTML=J,W()):m==="nft"?(I.innerHTML=Z,Tt()):m==="cart"?(I.innerHTML=tt,rt()):m==="book"?I.innerHTML=et:m==="error_tg"&&(I.innerHTML=F+nt,R())}async function Ht(){St(),await $t(),await Mt(),lt()||(await Ot(),U(),Y())}(async()=>document.addEventListener("DOMContentLoaded",async()=>Ht()))();
