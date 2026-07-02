import asyncio
import json
import random
import time

import aiohttp
from hydrogram import Client
from loguru import logger
from uuid6 import uuid7

from data.settings import BIP_address, proxies, BIP_decimals, API_ID, API_HASH
from storage import storage as redis_storage
from utils import events_parse


async def add_member_daily_bonus(app: Client = None, chat_id: str = '@BIPholders', amount: str | float | int = 0.05):
    raw_user_data = await redis_storage.get_item('user_data')
    data = json.loads(raw_user_data) if raw_user_data else {}

    raw_id2wallet = await redis_storage.get_item('BIP_id2wallet', full_key=True)
    id2wallet = json.loads(raw_id2wallet) if raw_id2wallet else {}

    if not app:
        app = Client("BIPholders_stat_bot", API_ID, API_HASH)
        await app.start()
        try:
            await add_member_daily_bonus(app, chat_id, amount)
        finally:
            await app.stop()
        return

    chat = await app.get_chat(chat_id)
    amount = round(amount, 10)
    async for member in app.get_chat_members(chat.id):
        user = member.user
        id = user.id.__str__()
        wallet_owner = id2wallet.get(id)
        if not wallet_owner:
            continue

        if not data.get(wallet_owner):
            data[wallet_owner] = {"balance": 0, "transactions": {}}
        if user.is_bot:
            continue

        data[wallet_owner]['balance'] = round(float(data[wallet_owner]['balance']) + amount, 10).__str__()
        data[wallet_owner]['transactions'][time.time().__str__()] = {"text": f'Chat member bonus', "type": 1002,
                                                                     "value": amount, "id": str(uuid7())}
    await redis_storage.set_item('user_data', data)
    logger.info('success add_member_daily_bonus')


async def add_member_percents_by_cw_balance(value: float = 0.3 / 365, session: aiohttp.ClientSession = None):
    if not session:
        async with aiohttp.ClientSession() as session:
            return await add_member_percents_by_cw_balance(value, session)

    users_data = json.loads(await redis_storage.get_item('user_data'))

    async with session.get(f'https://tonapi.io/v2/jettons/{BIP_address}/holders?limit=1000',
                           proxy=random.choice(proxies)) as response:
        if response.status != 200:
            raise ValueError
        response_data = await response.json()

        for wallet in response_data['addresses']:

            if not wallet.get('owner'):
                continue

            wallet_owner = wallet['owner']['address']
            wallet_balance = float(wallet['balance']) / BIP_decimals
            is_wallet = wallet['owner']['is_wallet']

            if not is_wallet:
                continue

            if not users_data.get(wallet_owner):
                users_data[wallet_owner] = {"balance": 0, "transactions": {}}

            url = f'https://tonapi.io/v2/accounts/{wallet_owner}/jettons/{BIP_address}/history?limit=1000&start_date={int(time.time() - 40 * 60 * 60)}'
            history_response_data = {}
            while not history_response_data:
                async with session.get(url, proxy=random.choice(proxies)) as history_response:

                    if history_response.status == 200:
                        history_response_data = await history_response.json()
                    else:
                        await asyncio.sleep(1)

            a = events_parse(history_response_data)

            bonus = __get_bonus({"balance": wallet_balance, "transactions": a}, value, time.time() - 23 * 60 * 60)

            users_data[wallet_owner]['balance'] = round(float(users_data[wallet_owner]['balance']) + bonus, 10)
            users_data[wallet_owner]['transactions'][time.time()] = {"text": f'Deposit percents', "type": 1003,
                                                                     "value": bonus, "id": str(uuid7())}

    await redis_storage.set_item('user_data', users_data)
    logger.info('success add_member_percents_by_cw_balance')


def __get_bonus(user_data, value, end_date=time.time() - 23 * 60 * 60):
    transactions = user_data['transactions']

    deposits_keys = filter(lambda x: float(x) > end_date, transactions.keys())
    deposits = sum(transactions[x]['value'] for x in deposits_keys)
    bonus = round((float(user_data['balance']) - deposits) * value, 10)
    if bonus < 0:
        bonus = 0
    return bonus


async def add_member_percents_by_sw_balance(value: float = 0.3 / 365):
    data = json.loads(await redis_storage.get_item('user_data'))

    for user_data in data.values():
        bonus = __get_bonus(user_data, value)

        user_data['balance'] = round(float(user_data['balance']) + bonus, 10)
        user_data['transactions'][time.time()] = {"text": f'Deposit percents', "type": 1001, "value": bonus,
                                                  "id": str(uuid7())}

    await redis_storage.set_item('user_data', json.dumps(data))
    logger.info('success add_member_percents_by_sw_balance')


async def add_BIP_by_admin(wallet: str, amount: float | int):
    if wallet[:2] != '0:':
        raise Exception('Incorrect wallet type')

    data = json.loads(await redis_storage.get_item('user_data'))
    user_data = data.get(wallet)

    if not user_data:
        raise Exception('Unknown user')

    user_data['balance'] = round(float(user_data['balance']) + amount, 10)
    user_data['transactions'][time.time()] = {"text": f'BIP from admin', "type": 1000, "value": amount,
                                              "id": str(uuid7())}

    await redis_storage.set_item('user_data', data)
    await redis_storage.save('user_data', 'user_data')


async def main():
    await add_member_daily_bonus()
    await add_member_percents_by_cw_balance()
    await add_member_percents_by_sw_balance()
    await redis_storage.save('user_data', 'user_data')


if __name__ == '__main__':
    asyncio.run(main())
