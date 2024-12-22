from v1 import price, info,auth
from fastapi import APIRouter

v1_router = APIRouter(prefix='/v1')
v1_router.include_router(price.price_router)
v1_router.include_router(info.info_router)
v1_router.include_router(auth.auth_router)


async def init():
    await price.init()
