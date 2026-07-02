import asyncio
import logging

from aiogram import Bot, Dispatcher, types
from aiogram.filters.command import Command
from aiogram.types import InlineKeyboardButton, WebAppInfo
from loguru import logger

from config import BOT_TOKEN, ADMIN_ID, APP_URL
from my_loger import LoggingMiddleware

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()
dp.message.outer_middleware(LoggingMiddleware())


@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    url = APP_URL
    tg_channel_b = InlineKeyboardButton(text="Перейти", web_app=WebAppInfo(url=url))
    markup = types.InlineKeyboardMarkup(inline_keyboard=[[tg_channel_b]])
    await message.answer(text='По кнопке ниже можно перейти на наше приложение', reply_markup=markup)


@dp.message(Command("help"))
async def help(message: types.Message):
    await bot.send_message(message.from_user.id, f"Написать администатору: {ADMIN_ID}")


async def main():
    logger.info('Главный телеграм бот запущен')
    await dp.start_polling(bot)


if __name__ == '__main__':
    logging.basicConfig(level=logging.WARNING)
    asyncio.run(main())
