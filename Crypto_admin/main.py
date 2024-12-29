import asyncio

from helper import tg_bot
from send import appTransactions


async def main():
    task1 = asyncio.create_task(appTransactions.autoHandlingNuwBuys(1))
    task2 = asyncio.create_task(tg_bot.main())

    await task1
    await task2


if __name__ == '__main__':
    asyncio.run(main())
