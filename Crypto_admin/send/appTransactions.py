import asyncio
import time

import aiohttp
from data.config import RECEIVE_ADDRESS, TESTER_ADDRESS, USDT_JETTON_MASTER_ADDRESS, MIN_TON_BUY_LIMIT, \
    MIN_USDT_BUY_LIMIT, PRICE_TAX
from data.storage import storage
from send.seller import Seller


async def __actionParse(action: dict, tokens_white_list: list) -> dict:
    type = action['type']
    if type not in ['TonTransfer', 'JettonTransfer']:
        return {'status': 'error', 'details': 'Incorrect type'}

    recipient = action[f'{action['type']}']['recipient']['address']

    if recipient != RECEIVE_ADDRESS:
        return {'status': 'error', 'details': 'Incorrect recipient'}

    sender = action[type]['sender']['address']
    amount = int(action[type]['amount'])
    comment = action[type].get('comment')

    if action['type'] == 'TonTransfer' and (
            amount / 1e9 >= MIN_TON_BUY_LIMIT or sender == TESTER_ADDRESS) and 'TON' in tokens_white_list:
        return {'status': 'ok', 'amount': amount / 1e9, 'token': 'TON', 'sender': sender, 'comment': comment}
    if action['type'] == 'JettonTransfer':
        if action['JettonTransfer']['jetton']['address'] == USDT_JETTON_MASTER_ADDRESS and 'USDT' in tokens_white_list:
            if amount / 1e6 >= MIN_USDT_BUY_LIMIT or sender == TESTER_ADDRESS:
                return {'status': 'ok', 'amount': amount / 1e6, 'token': 'USDT', 'sender': sender, 'comment': comment}
        else:
            return {'status': 'error', 'details': 'Noname token'}

    return {'status': 'error', 'details': 'Not enough token'}


async def calcBIPCount(value: float, coin: str, price_correct=1.0):
    if coin.upper() == 'TON':
        value *= float(await storage.get_item('TON_price'))
    if coin.upper() == 'RUB':
        value /= float(await storage.get_item('RUB_price'))
    return value / (float(await storage.get_item('BIP_price')) * price_correct)


async def checkAndSendNuwTransactions(receive_address, tokens: list[str] | None = None) -> None:
    if tokens is None:
        tokens = ['TON', 'USDT']

    processed_transactions_str = await storage.get_item('processed_transactions')
    processed_transactions_set = set(processed_transactions_str.split('|'))
    last_transaction_timestamp = int(await storage.get_item('last_transaction_timestamp'))

    async with aiohttp.ClientSession() as session:
        url = f'https://tonapi.io/v2/accounts/{receive_address}/events?limit={100}&start_date={last_transaction_timestamp}'
        async with session.get(url) as response:
            if response.status == 200:
                events = await response.json()
                events['events'].reverse()
                for transaction in events['events']:
                    if transaction['timestamp'] > last_transaction_timestamp:
                        last_transaction_timestamp = transaction['timestamp']
                    if transaction['event_id'] not in processed_transactions_set:
                        processed_transactions_str += '|' + transaction['event_id']
                        for action in transaction['actions']:
                            reply = await __actionParse(action, tokens)
                            if reply['status'] == 'ok' and reply.get('comment') != "not sale":
                                amount_bip = await calcBIPCount(reply['amount'], reply['token'],
                                                                price_correct=PRICE_TAX)
                                message = f'Спасибо за покупку BIP на {reply['amount']} {reply['token']}'
                                await Seller().sendBIP([(reply['sender'], amount_bip, message)])

    await storage.set_item('last_transaction_timestamp', last_transaction_timestamp)
    await storage.set_item('processed_transactions', processed_transactions_str)


async def autoHandlingNuwBuys(sleep=3):
    await storage.set_item('last_transaction_timestamp', str(int(time.time())))
    await storage.set_item('processed_transactions', 'start')
    while 1:
        await checkAndSendNuwTransactions(RECEIVE_ADDRESS)
        await asyncio.sleep(sleep)


if __name__ == '__main__':
    asyncio.run(autoHandlingNuwBuys())
