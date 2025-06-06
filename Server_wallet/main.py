import asyncio
import time
from pprint import pprint

from add_bonuses import add_member_daily_bonus, add_member_percents_by_cw_balance
from storage import storage as redis_storage
from utils import get_seconds_until_tomorrow_utc


async def auto_add_bonuses():
    while 1:
        try:
            await add_member_daily_bonus()
        except Exception as e:
            print(time.time(), 'add_member_daily_bonus', e)
        try:
            await add_member_percents_by_cw_balance()
        except Exception as e:
            print(time.time(), 'add_member_daily_bonus', e)
        await redis_storage.save('user_data', 'user_data')
        pprint(await redis_storage.get_item('user_data'))
        await asyncio.sleep(get_seconds_until_tomorrow_utc())


async def main():
    await redis_storage.set_item('user_data', '{}')
    await redis_storage.save('user_data', 'user_data')
    # await asyncio.sleep(get_seconds_until_tomorrow_utc())
    task1 = asyncio.create_task(auto_add_bonuses())
    pprint('a')
    await task1


if __name__ == "__main__":
    asyncio.run(main())
