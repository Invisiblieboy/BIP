from fastapi import FastAPI

app = FastAPI()


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
def CreateItemMetadata(value: int):
    image = "https://nft.biptoken.xyz/defaultNFT.png"
    if 100 <= value < 1000:
        image = "https://nft.biptoken.xyz/100NFT.png"
    elif 1000 <= value < 10000:
        image = "https://nft.biptoken.xyz/1000NFT.png"
    elif 10000 <= value:
        image = "https://nft.biptoken.xyz/10000NFT.png"

    return {
        "name": f"{value} BIP NFT",
        "description": f"You can swap this NFT to {value} BIPCoins",
        "image": image,
        "attributes": [
            {
                "trait_type": "Value",
                "value": value
            }
        ]
    }

# uvicorn --reload --port 8000 main:app
# --break-system-packages

# uvicorn.run(app, port=8000)
