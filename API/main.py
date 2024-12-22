import asyncio

from fastapi import FastAPI

import v1

app = FastAPI()


@app.get("/")
def root():
    return {"msg": "Hello"}


app.include_router(v1.v1_router)

if __name__ == '__main__':
    asyncio.run(v1.init())

# uvicorn --reload --port 8000 main:app
# --break-system-packages

# uvicorn.run(app, port=8000)
