import asyncio
import json
from pprint import pprint

from fastapi import APIRouter

from utils.storage import storage
from v1.utils.tg_web_app_auth import WebAppAuth, AuthError

wallet_router = APIRouter(prefix='/wallet', tags=['wallet', 'info'])


@wallet_router.get("/info")
async def wallet_info(tgInitData):
    try:
        user_id = str(WebAppAuth().get_user_id(tgInitData))
    except AuthError as e:
        return {'state': 'invalid', 'op': '-100', 'detail': e.detail}

    # for path in ['C:/Work/Projects/BIP/Server_wallet/data/data.json',
    #              '/usr/dev/BIP/Server_wallet/data/data.json'][::-1]:
    #     if os.path.isfile(path):
    #         with open(path, 'r') as f:
    #             users_data: dict = json.load(f)
    #             break
    # else:
    #     return {'state': 'invalid', 'op': '-101', 'detail': 'Server error'}

    users_data = json.loads(await storage.get_item('sw_user_data'))
    id2wallet = json.loads(await storage.get_item('id2wallet'))
    addr = id2wallet.get(user_id)
    if not addr:
        return {'state': 'success', 'op': '101', 'detail': 'Unknown user'}
    user_data = users_data.get(addr, None)

    if user_data:
        return {'state': 'success', 'op': '0', 'data': user_data}
    else:
        return {'state': 'success', 'op': '100', 'detail': 'Unknown user'}


if __name__ == '__main__':
    tg_init_data = (''
'user=%7B%22id%22%3A1447179490%2C%22first_name%22%3A%22%D0%AF%D1%80%D0%B8%D0%BA%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22spiwt%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F9SZwBc-iprAdJF-pRQRbeqPFZ2SxgRhzKwjFFAiFQh0.svg%22%7D&chat_instance=-5966291110006690600&chat_type=private&auth_date=1745767340&signature=Wity7pbA5LOvN1Ol5KQz9bOMRBhoMZGCXWp2jUNdy8J_bX1wKp5DXDPTjiTlWRmOU_5EYzgu-SCucjk8epooDA&hash=e6ff215532e8736952547ce56965fe7e4bc028393c1abe4bf085e35829bd7719'
                    '')
    pprint(asyncio.run(bip_price(tg_init_data)))
