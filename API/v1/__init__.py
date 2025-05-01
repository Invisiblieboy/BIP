from fastapi import APIRouter

from v1 import price, info, auth, server_wallet

v1_router = APIRouter(prefix='/v1')
v1_router.include_router(price.price_router)
v1_router.include_router(info.info_router)
v1_router.include_router(auth.auth_router)
v1_router.include_router(server_wallet.wallet_router)

async def init():
    return None