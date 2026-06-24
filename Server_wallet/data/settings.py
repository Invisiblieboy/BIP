import os

from dotenv import load_dotenv

proxies = [None]

BIP_address = '0:786e74bba071d57c75004bb41bf978ea73e00b03f3f3fbf2b73ea0426f97d6e9'
BIP_decimals = 1e9

load_dotenv()
API_ID = os.getenv('api_id')
API_HASH = os.getenv('api_hash')
