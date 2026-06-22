import asyncio
import os
import sys

from fastapi import FastAPI

import v1
from utils.storage import storage

dir_path = os.path.dirname(os.path.realpath(__file__))
sys.path.append(dir_path)

app = FastAPI()


@app.get("/")
def root():
    return {"msg": "Hello"}


app.include_router(v1.v1_router)


async def main():
    if not await storage.get_item('id2wallet'):
        await storage.set_item('id2wallet', '{}')
    if not await storage.get_item('wallet2id'):
        await storage.set_item('wallet2id', '{}')
    if not await storage.get_item('id2user'):
        await storage.set_item('id2user', '{}')

    await v1.init()


if __name__ == '__main__':
    asyncio.run(main())

# uvicorn --reload --port 8000 main:app
# --break-system-packages

# uvicorn.run(app, port=8000)
