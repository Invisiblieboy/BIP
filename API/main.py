import asyncio

from fastapi import FastAPI

import v1

app = FastAPI()


@app.get("/")
def root():
    return {"msg": "Hello"}


app.include_router(v1.v1_router)


async def main():
    await v1.init()


if __name__ == '__main__':
    asyncio.run(main())

# uvicorn --reload --port 8000 main:app
# --break-system-packages

# uvicorn.run(app, port=8000)
