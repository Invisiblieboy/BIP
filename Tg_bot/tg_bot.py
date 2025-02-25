import asyncio
import logging

from aiogram import Bot, Dispatcher, types
from aiogram.filters.command import Command
from aiogram.types import InlineKeyboardButton, WebAppInfo

from config import BOT_TOKEN, ADMIN_ID, APP_URL

# from src.backend.connector import get_connector
# from utils.site_tokens import SiteTokens
logging.getLogger("aiogram.event").setLevel(logging.WARNING)
bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()


# ST = SiteTokens()


@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    url = APP_URL
    tg_channel_b = InlineKeyboardButton(text="Перейти", web_app=WebAppInfo(url=url))
    markup = types.InlineKeyboardMarkup(inline_keyboard=[[tg_channel_b]])
    await message.answer(text='соси ', reply_markup=markup)


@dp.message(Command("help"))
async def help(message: types.Message):
    await bot.send_message(message.from_user.id, f"Написать администатору: {ADMIN_ID}")


# @dp.message(Command("disconnect_wallet"))
# async def app(message: types.Message):
#     chat_id = message.chat.id.__str__()
#     connector = get_connector(int(chat_id))
#     if await connector.restore_connection():
#         asyncio.create_task(connector.disconnect())
#         await message.answer('Успешно')
#     else:
#         await message.answer('Кошелек не подключен')


async def main():
    await dp.start_polling(bot)


if __name__ == '__main__':
    asyncio.run(main())
