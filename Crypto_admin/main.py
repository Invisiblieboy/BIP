import asyncio
import sys

from loguru import logger

from helper import help_bot
from send import appTransactions

logger.remove()
logger.add(sys.stdout, format="{time:YYYY-MM-DD HH:mm:ss} | <level>{level: <8}</level> | {message}")


async def main():
    task1 = asyncio.create_task(appTransactions.autoHandlingNuwBuys(5))
    task2 = asyncio.create_task(appTransactions.autoHandlingSWCashOut(5))
    task3 = asyncio.create_task(help_bot.main())

    await task1
    await task2
    await task3


if __name__ == '__main__':
    asyncio.run(main())
