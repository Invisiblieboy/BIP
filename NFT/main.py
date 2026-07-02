import uvicorn
from fastapi import FastAPI
from loguru import logger

import my_logger


async def lifespan(app: FastAPI):
    logger.info('NFT сервер запущен')
    yield
    logger.info("NFT сервер остановлен.")


app = FastAPI(lifespan=lifespan)
app.middleware("http")(my_logger.log_requests)


@app.get("/CollectionMetadata")
def CollectionMetadata():
    return {
        "name": "BIP stocks",
        "description": "Stocks of the BaltInvestProject company",
        "image": "https://nft.biptoken.xyz/collection.png",
        "social_links": ["https://t.me/BIPholders", "https://t.me/BIPapp_bot", "https://biptoken.xyz",
                         "https://t.me/BaltInvestProekt", "https://t.me/biplions1"],
        "marketplace": "getgems.io"
    }


@app.get("/CreateItemMetadata")
def CreateItemMetadata(value: float = 0):
    image = "https://nft.biptoken.xyz/defaultNFT.png"
    if 100 <= value < 1000:
        image = "https://nft.biptoken.xyz/100NFT.png"
    elif 1000 <= value < 10000:
        image = "https://nft.biptoken.xyz/1000NFT.png"
    elif 10000 <= value:
        image = "https://nft.biptoken.xyz/10000NFT.png"

    if value % 1 == 0:
        value: int = int(value)

    name_value = int(value)
    name_str = f"{value} BIP NFT"
    if name_value == 0:
        name_str = "BIP NFT"

    return {
        "name": name_str,
        "description": f"You can swap this NFT to {value} BIPCoins",
        "image": image,
        "attributes": [
            {
                "trait_type": "Value",
                "value": value
            }
        ]
    }


if __name__ == '__main__':
    uvicorn.run("main:app", host='0.0.0.0', port=8000, log_config={"version": 1})

# uvicorn --reload --port 8000 main:app
# --break-system-packages

# uvicorn.run(app, port=8000)
