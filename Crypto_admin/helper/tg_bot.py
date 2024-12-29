import asyncio
import json
import logging

from aiogram import Bot, Dispatcher, types
from aiogram.filters.command import Command
from data.config import BOT_TOKEN, PRICE_TAX
from data.storage import storage
from send.seller import Seller

logging.getLogger("aiogram.event").setLevel(logging.WARNING)
bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()

white_list = []
transactions = {}


@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    user_id = message.from_user.username
    if user_id in white_list:
        await message.answer(text='HI admin')
    else:
        await message.answer(text='You not in white list')

    await message.answer(text=f'Your username: {user_id}')


async def calcBIPCount(value: float, price_correct=1.0):
    return value / float(await storage.get_item('RUB_price')) / (
            float(await storage.get_item('BIP_price')) * price_correct)


@dp.message(Command("approve"))
async def send(message: types.Message):
    admin_uname = message.from_user.username
    if admin_uname in white_list:
        trans = transactions.get(admin_uname)
        if trans:
            uwallet, amount_bip, comment = trans
            if uwallet and amount_bip and comment:
                tri = await Seller().sendBIP([(uwallet, amount_bip, comment)])
                await message.answer(f'Success tri: `{tri}`')
            else:
                await message.answer(f'Error\n`{uwallet}`\n`{amount_bip}`\n`{comment}`', parse_mode="MARKDOWN")
            del transactions[admin_uname]
        else:
            await message.answer(f'transaction not exist')


@dp.message(Command("deny"))
async def send(message: types.Message):
    admin_uname = message.from_user.username
    if admin_uname in white_list:
        trans = transactions.get(admin_uname)
        if trans:
            uwallet, amount_bip, comment = trans
            await message.answer(f'Cancel\n`{uwallet}`\n`{amount_bip}`\n`{comment}`', parse_mode="MARKDOWN")
            del transactions[admin_uname]
        else:
            await message.answer(f'transaction not exist')


@dp.message(Command("send"))
async def send(message: types.Message):
    admin_uname = message.from_user.username
    if admin_uname in white_list:
        msg = message.text.split(' ')
        if len(msg) < 3:
            await message.answer(f'Message must be\n/send uid RUB_amount probably_comment')
            return
        comment = ' '.join(msg[3:])
        print(msg[3:])
        _, uid, amount = msg[:3]

        id2wallet: dict = json.loads(await storage.get_item('id2wallet'))
        uwallet = id2wallet.get(uid)
        if not uwallet:
            await message.answer(f'unknown uid')
            return

        id2user: dict = json.loads(await storage.get_item('id2user'))
        user = id2user.get(uid)
        if user:
            username = user['username']
        else:
            username = None

        amount_bip = round(await calcBIPCount(float(amount), price_correct=PRICE_TAX), 3)

        if not comment:
            comment = f'Спасибо за покупку BIP на {amount} рублей'

        await message.answer(
            f'USER ID - @{username}\n\nAMOUNT - `{amount_bip}` BIP\n\nADDRESS - `{uwallet}`\n\nMESSAGE - `{comment}`'
            f'\n\nplease enter /deny or /approve', parse_mode="MARKDOWN")
        transactions[admin_uname] = (uwallet, amount_bip, comment)


async def init():
    # please split |
    # username1|uname2|uname3
    await storage.set_item('tg_payment_admins', 'spiwt')


async def main():
    global white_list

    await init()
    white_list = await storage.get_item('tg_payment_admins')
    white_list = white_list.split('|')
    await dp.start_polling(bot)


if __name__ == '__main__':
    asyncio.run(main())
