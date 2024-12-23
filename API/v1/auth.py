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
        return {'state': 'invalid', 'op': '-100', 'detail': e.detail}
    id2user[id]: dict = json.loads(WebAppAuth().validate(tgInitData)['user'])

    wallet_old = id2wallet.get(id)
    if wallet2id.get(wallet_old):
        del wallet2id[wallet_old]

    id2wallet[id] = wallet_address
    wallet2id[wallet_address] = id

    await storage.set_item('id2wallet', json.dumps(id2wallet))
    await storage.set_item('wallet2id', json.dumps(wallet2id))
    await storage.set_item('id2user', json.dumps(id2user))

    return {'state': 'success', 'op': '0'}


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


async def remove_from_banlist(user: str):
    banlist: dict = json.loads(await storage.get_item('banlist'))
    banlist[user] = 'false'
    await storage.set_item('banlist', json.dumps(banlist))


async def main():
    await storage.set_item('id2wallet', '{}')
    await storage.set_item('wallet2id', '{}')
    await storage.set_item('id2user', '{}')
    await storage.set_item('banlist', '{}')


if __name__ == '__main__':
    asyncio.run(main())
