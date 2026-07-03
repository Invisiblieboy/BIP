import asyncio
import os

import uvicorn
from fastapi import FastAPI
from loguru import logger

import my_logger
import v1
from utils.storage import storage


async def lifespan(app: FastAPI):
    # подгрузка данных с диска
    for key in ['id2wallet', 'wallet2id', 'id2user']:
        await storage.remove_item(key)
        if not await storage.get_item(key):
            if os.path.exists(f'data/{key}.json'):
                await storage.load(key, key)
                logger.debug(f'загружено {key}')
            else:
                await storage.set_item(key, '{}')
                await storage.save(key, key)

    if not await storage.get_item('sw_user_data'):
        await storage.set_item('sw_user_data', '{}')

    worker_task = asyncio.create_task(v1.init())
    logger.info('API сервер запущен')
    yield
    worker_task.cancel()

    try:
        await worker_task
    except asyncio.CancelledError:
        logger.info("API сервер остановлен.")
    except Exception as e:
        logger.error(f"Ошибка при остановке API сервера: {e}")


app = FastAPI(lifespan=lifespan)
app.middleware("http")(my_logger.log_requests)
app.include_router(v1.v1_router)


@app.get("/")
def root():
    return {"msg": "Hello"}


if __name__ == '__main__':
    uvicorn.run("main:app", host='0.0.0.0', port=8000, log_config={"version": 1})

# uvicorn --port 8000 main:app --reload
# --break-system-packages

# uvicorn.run(app, port=8000)

# docker build -t my-api-app .
# docker run -d -p 8000:8000 --env-file .env --name fastapi-server my-api-app
# docker logs fastapi-server
# docker compose up -d --build
