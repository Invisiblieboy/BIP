import time

from fastapi import APIRouter

from utils.config import to_buy_card, to_buy_wallet

info_router = APIRouter(prefix='/info', tags=['info'])


@info_router.get("/time")
async def bip_price():
    return {"time": str(time.time())}


@info_router.get("/card")
async def bip_price():
    return {"card": '5280413755386435'}


@info_router.get("/payments")
async def bip_price():
    return {"card": to_buy_card, "wallet": to_buy_wallet}
