import time

from fastapi import APIRouter

from utils.config import payments

info_router = APIRouter(prefix='/info', tags=['info'])


@info_router.get("/time")
async def bip_price():
    return {"time": str(time.time())}


@info_router.get("/card")
async def bip_price():
    return {"card": payments['card']}


@info_router.get("/payments")
async def bip_price():
    return payments
