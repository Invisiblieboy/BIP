import asyncio

from helper import help_bot
from send import appTransactions


async def main():
    task1 = asyncio.create_task(appTransactions.autoHandlingNuwBuys(2))
    task2 = asyncio.create_task(appTransactions.autoHandlingSWCashOut(3))
    task3 = asyncio.create_task(help_bot.main())

    await task1
    await task2
    await task3


if __name__ == '__main__':
    asyncio.run(main())
