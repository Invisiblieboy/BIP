import os

from dotenv import load_dotenv

load_dotenv()

MANIFEST_URL = 'https://app.biptoken.xyz/static/json/MANIFEST.json'

token_addr = "EQBvx2BnUv_rrXL3Mua-nOC2kBp8GD6lW7fRqFmLkAzzvaMY"
pool_addr = "EQDnOa7YLAPO8TJxaJ463F30DJckF-dxvylxsSpitNGhiBJ9"
url_base = "https://api.geckoterminal.com/api/v2/"
url_token_info = "networks/ton/pools/"

RUB_PRICE_URL = 'https://www.cbr-xml-daily.ru/daily_json.js'
BIP_PRICE_URL = 'https://api.geckoterminal.com/api/v2/networks/ton/pools/EQDnOa7YLAPO8TJxaJ463F30DJckF-dxvylxsSpitNGhiBJ9'
TON_PRICE_URL = 'https://api.coingecko.com/api/v3/coins/the-open-network'

token_url_list = {
    'RUB': RUB_PRICE_URL,
    'BIP': BIP_PRICE_URL,
    'TON': TON_PRICE_URL
}

to_buy_wallet = 'UQDvQBGJe8GtwSPGeqBUjupvVevW45VQA__zIF1AWfWOwS_K'
to_buy_card = '5280413755386435'

BOT_TOKEN = os.getenv('BOT_TOKEN')
