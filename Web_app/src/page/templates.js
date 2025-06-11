export const page_error_connect_wallet = `
    <div id="error_connect_wallet">
        <p class="text-lg">Сначала подключите <span class="gold site-link btn_page_wallet">кошелек</span></p>
    </div>`

export const page_info = `
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
    `

export const page_wallet = `
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
`

export const page_nft = `
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
`

export const page_cart = `
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
    `
export const page_book = `
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
    </div>`

export const page_error_tg = `
    <div id = "error-tg">
        <br>
        <div class="message-cloud mt-8">
            <p class="p-4 text-3xl font-bold text-center">Больше информации в нашем <span class="site-link link-tgbot gold">Telegram-боте</span>.</p>
        </div>
    </div>`
