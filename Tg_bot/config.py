import os

from dotenv import load_dotenv

APP_URL = 'https://app.biptoken.xyz'

MANIFEST_URL = 'https://raw.githubusercontent.com/Invisiblieboy/BIP_utils/main/MANIFEST.json'

token_addr = 'EQBvx2BnUv_rrXL3Mua-nOC2kBp8GD6lW7fRqFmLkAzzvaMY'
pool_addr = 'EQDnOa7YLAPO8TJxaJ463F30DJckF-dxvylxsSpitNGhiBJ9'
url_base = 'https://api.geckoterminal.com/api/v2/'
url_token_info = 'networks/ton/pools/'

path_project = fr'C://Users/serdy/PycharmProjects/BIP_app/'
path_site_tokens = rf'{path_project}data/valid_site_tokens.json'

urls = [
    't.me/BIPapp_bot/BIP_app'
]

load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))
BOT_TOKEN = os.getenv('BOT_TOKEN')
ADMIN_ID = os.getenv('ADMIN_ID')
TONAPI_TOKEN = os.getenv('TONAPI_TOKEN')
