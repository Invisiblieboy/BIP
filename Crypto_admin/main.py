import asyncio

from helper import tg_bot
from send import appTransactions


async def main():
    await appTransactions.autoHandlingNuwBuys(1)
    await tg_bot.main()


if __name__ == '__main__':
    asyncio.run(main())
