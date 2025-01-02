import asyncio

from API.main import main as api_main
from Crypto_admin.main import main as crypto_main
from Tg_bot.tg_bot import main as tg_bot_main


async def main():
    task1 = asyncio.create_task(tg_bot_main())
    task2 = asyncio.create_task(api_main())
    task3 = asyncio.create_task(crypto_main())

    await task1
    await task2
    await task3


if __name__ == '__main__':
    asyncio.run(main())
