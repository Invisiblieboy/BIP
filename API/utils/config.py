import os

from dotenv import load_dotenv

MANIFEST_URL = 'https://app.biptoken.xyz/static/json/MANIFEST.json'

token_addr = "EQB4bnS7oHHVfHUAS7Qb-Xjqc-ALA_Pz-_K3PqBCb5fW6XIP"
pool_addr = "EQCJWbehGyHtkgw6IMzcY1VPAJwre1sWWGvqKYm1_h0CpsJe"
url_base = "https://api.geckoterminal.com/api/v2/"
url_token_info = "networks/ton/pools/"

RUB_PRICE_URL = 'https://www.cbr-xml-daily.ru/daily_json.js'
BIP_PRICE_URL = f'https://api.geckoterminal.com/api/v2/networks/ton/pools/{pool_addr}'
TON_PRICE_URL = 'https://api.coingecko.com/api/v3/coins/the-open-network'

token_url_list = {
    'RUB': RUB_PRICE_URL,
    'BIP': BIP_PRICE_URL,
    'TON': TON_PRICE_URL
}

payments = {
    "card": '5280413755386435',
    "wallet": 'UQAlYNS0neZkR-rCxKJAVALuc2Ni_QiHyjrEqjg18yaNjjg6',
    "buy_wallet": 'UQAlYNS0neZkR-rCxKJAVALuc2Ni_QiHyjrEqjg18yaNjjg6',
    "nft_wallet": 'EQB5pj8eAdP7bfRqEaI7jZEE1V8ZPtfjqleFAG_AXnHnHXs0',
}

load_dotenv()
BOT_TOKEN = os.getenv('BOT_TOKEN')
