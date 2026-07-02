import asyncio
import os.path
import sys
import time

from loguru import logger

from add_bonuses import add_member_daily_bonus, add_member_percents_by_cw_balance, add_member_percents_by_sw_balance
from storage import storage as redis_storage
from utils import get_seconds_until_tomorrow_utc

logger.remove()
logger.add(sys.stdout, format="{time:YYYY-MM-DD HH:mm:ss} | <level>{level: <8}</level> | {message}")


async def auto_add_bonuses():
    while 1:
        try:
            await add_member_daily_bonus()
        except Exception as e:
            logger.exception((time.time(), 'add_member_daily_bonus', e))
        try:
            await add_member_percents_by_cw_balance()
        except Exception as e:
            logger.exception((time.time(), 'add_member_percents_by_cw_balance', e))
        try:
            await add_member_percents_by_sw_balance()
        except Exception as e:
            logger.exception((time.time(), 'add_member_percents_by_sw_balance', e))
        await redis_storage.save('user_data', 'user_data')
        await asyncio.sleep(get_seconds_until_tomorrow_utc())


async def main():
    if os.path.exists('data/user_data.json'):
        await redis_storage.load('user_data', 'user_data')
        logger.debug('user_data загружены из файла')
    else:
        await redis_storage.set_item('user_data', '{}')
        logger.debug('user_data не найдены')

    await asyncio.sleep(get_seconds_until_tomorrow_utc())
    task1 = asyncio.create_task(auto_add_bonuses())
    await task1


if __name__ == "__main__":
    asyncio.run(main())
