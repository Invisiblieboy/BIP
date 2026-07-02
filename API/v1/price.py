import asyncio

import aiohttp
from fastapi import APIRouter
from loguru import logger

from utils.config import *
from utils.storage import storage

price_router = APIRouter(prefix='/price', tags=['price'])


async def price_update(token) -> None:
    token = token.upper()
    url = token_url_list[token]
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            if response.status == 200:
                data = await response.json(content_type=None)
                price = 0

                if token == 'BIP':
                    price = data['data']['attributes']['base_token_price_quote_token']
                elif token == 'TON':
                    price = data['market_data']['current_price']['usd']
                elif token == 'RUB':
                    price = data['Valute']['USD']['Value']

                await storage.set_item(f'{token}_price', str(price))


@price_router.get("/bip")
async def BIP_price():
    price = await storage.get_item('BIP_price')
    return {"price": price}


@price_router.get("/ton")
async def TON_price():
    price = await storage.get_item('TON_price')
    return {"price": price}


@price_router.get("/rub")
async def RUB_price():
    price = await storage.get_item('RUB_price')
    return {"price": price}


@price_router.get("/tokens")
async def tokens_price():
    rub = await storage.get_item('RUB_price')
    ton = await storage.get_item('TON_price')
    bip = await storage.get_item('BIP_price')
    return {"rub": rub, "ton": ton, "bip": bip}


async def passive_update(s=1):
    while 1:
        for key in token_url_list.keys():
            try:
                await price_update(key)
            except Exception as e:
                logger.exception(f'passive_update error: {e}')
        logger.debug('Цены токенов обновлены')
        await asyncio.sleep(s)


async def init():
    await passive_update(10)


async def main():
    await price_update('BIP')
    await price_update('RUB')
    await price_update('TON')


if __name__ == '__main__':
    asyncio.run(main())
