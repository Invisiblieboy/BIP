import asyncio
import os
import time

import simplejson as json
from pyrogram import Client
from uuid_extensions import uuid7str

api_id = 23080053
api_hash = '64a90fa5325969a63937a932e4b79e25'


class Storage:
    def __init__(self):
        self.data = {}
        if 'data.json' in os.listdir():
            self.load()
        else:
            self.save()

    def save(self, data=None) -> None:
        if data is None:
            data = self.data
        with open('data.json', 'w') as f:
            json.dump(data, f, indent=2)

    def load(self) -> dict:
        with open('data.json', 'r') as f:
            self.data = json.load(f)
        return self.data


storage = Storage()


async def add_member_percents(value: float = 0.3 / 365):
    data = storage.load()
    end_date = time.time()
    value = round(value, 10)

    for user_data in data.values():
        transactions = user_data['transactions']
        deposits_keys = filter(lambda x: float(x) > end_date, transactions.keys())
        deposits = sum(transactions[x]['value'] for x in deposits_keys)

        bonus = round((float(user_data['balance']) - deposits) * value, 10)
        if bonus <= 0:
            continue

        user_data['balance'] = round(float(user_data['balance']) + bonus, 10)
        user_data['transactions'][time.time().__str__()] = {
            "text": f'Deposit percents {round(bonus, 6)} BIP',
            "value": bonus,
            "id": uuid7str()}

    storage.save(data)


async def add_member_daily_bonus(app: Client = None, chat_id: str = '@BIPholders', amount: str | float | int = 0.05):
    data = storage.load()
    if not app:
        async with Client("BIPholders_stat_bot") as app:
            return await add_member_daily_bonus(app)

    chat = await app.get_chat(chat_id)
    amount = round(amount, 10)
    async for member in app.get_chat_members(chat.id):
        user = member.user
        id = user.id.__str__()

        if not data.get(id):
            data[id] = {
                "balance": 0,
                "transactions": {}
            }
        if user.is_bot:
            continue

        data[id]['balance'] = round(float(data[id]['balance']) + amount, 10).__str__()
        data[id]['transactions'][time.time().__str__()] = {
            "text": f'Chat member bonus {amount} BIP',
            "value": amount,
            "id": uuid7str()}

        # a = {"id": user.id,
        #      "first_name": user.first_name,
        #      "last_name": user.last_name,
        #      "username": user.username,
        #      "is_bot": user.is_bot,
        #      "joined_date": member.joined_date})

    storage.save(data)


async def main():
    storage.save({})
    await add_member_daily_bonus()
    for i in range(100):
        await add_member_percents(0.1)


if __name__ == "__main__":
    asyncio.run(main())
