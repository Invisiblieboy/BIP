import asyncio
import json

from fastapi import APIRouter

from utils.storage import storage
from v1.utils.tg_web_app_auth import WebAppAuth, AuthError

auth_router = APIRouter(prefix='/auth', tags=['auth'])


@auth_router.post("/nuw")
async def nuw_user(wallet_address, tgInitData):
    id2wallet: dict = json.loads(await storage.get_item('id2wallet'))
    wallet2id: dict = json.loads(await storage.get_item('wallet2id'))
    id2user: dict = json.loads(await storage.get_item('id2user'))
    try:
        id = str(WebAppAuth().get_user_id(tgInitData))
    except AuthError as e:
        return {'state': 'invalid', 'op': '-100', 'reason': e.detail}
    id2user[id]: dict = json.loads(WebAppAuth().validate(tgInitData)['user'])

    wallet_old = id2wallet.get(id)
    if wallet2id.get(wallet_old):
        del wallet2id[wallet_old]

    id2wallet[id] = wallet_address
    wallet2id[wallet_address] = id

    await storage.set_item('id2wallet', json.dumps(id2wallet))
    await storage.save('id2wallet', 'id2wallet')
    await storage.set_item('wallet2id', json.dumps(wallet2id))
    await storage.save('wallet2id', 'wallet2id')
    await storage.set_item('id2user', json.dumps(id2user))
    await storage.save('id2user', 'id2user')

    return {'state': 'success', 'op': '0'}


@auth_router.get("/check")
async def check(addresses: str | None = None):
    # INPUT
    # wallets_addresses     must be:    addr1|addr2|addr3
    # addresses in raw

    # OUTPUT
    # return only valid
    # {'state': 'success', 'op': '0', 'data': [addr1,addr3]}

    if not addresses:
        return {'state': 'invalid', 'op': '-100', 'reason': 'Not given wallet address'}

    wallet2id: dict = json.loads(await storage.get_item('wallet2id'))

    if addresses:
        wallets_valid = []
        for wallet in addresses.split('|'):
            if wallet2id.get(wallet):
                wallets_valid.append(wallet)
        return {'state': 'success', 'op': '0', 'data': wallets_valid}


@auth_router.get("/validate")
async def validate_user(wallet_address, tgInitData):
    id2wallet: dict = json.loads(await storage.get_item('id2wallet'))
    banlist: dict = json.loads(await storage.get_item('banlist'))

    try:
        id = str(WebAppAuth().get_user_id(tgInitData))
    except AuthError as e:
        return {'state': 'invalid', 'op': '-100', 'detail': e.detail}

    if banlist.get(wallet_address) == 'true':
        return {'state': 'success', 'op': '101', 'valid': 'false', 'reason': 'wallet address in ban list'}
    if banlist.get(id) == 'true':
        return {'state': 'success', 'op': '102', 'valid': 'false', 'reason': 'user id in ban list'}

    if id2wallet[id] == wallet_address:
        return {'state': 'success', 'op': '0', 'valid': 'true'}
    else:
        return {'state': 'success', 'op': '103', 'valid': 'false', 'reason': 'user id and wallet address do not match'}


async def add_to_banlist(user: str):
    banlist: dict = json.loads(await storage.get_item('banlist'))
    banlist[user] = 'true'
    await storage.set_item('banlist', json.dumps(banlist))
    await storage.save('banlist', 'banlist')


async def remove_from_banlist(user: str):
    banlist: dict = json.loads(await storage.get_item('banlist'))
    banlist[user] = 'false'
    await storage.set_item('banlist', json.dumps(banlist))
    await storage.save('banlist', 'banlist')


async def main():
    print(await check(wallet_address='0:d5bbeb92a3de5926bfb523aa3b1876f5507baca17d533ecfc9a9680a94e4039e'))
    print(await check(wallets_addresses=['0:d5bbeb92a3de5926bfb523aa3b1876f5507baca17d533ecfc9a9680a94e4039e',
                                         'UQB7q5qYhCOAIQbhWlIoq78ZXpGZWRn-gZc30-CSckZSMc_s']))


if __name__ == '__main__':
    asyncio.run(main())
