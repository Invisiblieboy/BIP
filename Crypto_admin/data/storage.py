import asyncio
import json
import time

import redis.asyncio as redis

client = redis.Redis(host='localhost', port=6379)


class Storage:
    base_key = 'BIP_'

    async def set_item(self, key: str, value: str|dict):
        if isinstance(value,dict):
            value = json.dumps(value)
        await client.set(name=self.base_key + key, value=value)

    async def get_item(self, key: str, default_value: str = None):
        value = await client.get(name=self.base_key + key)
        return value.decode() if value else default_value

    async def remove_item(self, key: str):
        await client.delete(self.base_key + key)

    async def clear(self):
        for key in await client.keys(f'{self.base_key}*'):
            await client.delete(key)


class StorageWallet:
    def __init__(self, base_path=''):
        self.base_path = base_path
        self.base_path += 'wallets/'

        self.wallets_json = {}
        self.get_wallet(from_file=True)

    def get_wallet(self, address: str = '', from_file=False):
        if from_file:
            try:
                with open(self.base_path + 'wallets.json', 'r') as file:
                    self.wallets_json = json.load(file)
            except FileNotFoundError:
                self.wallets_json = {}
                with open(self.base_path + 'wallets.json', 'w') as file:
                    json.dump({}, file)

        if address:
            return self.wallets_json.get(address)
        return self.wallets_json

    def set_wallet(self, address: str, mnemonics: list[str], is_testnet: bool = False, version: str = ''):
        self.wallets_json[address] = {'address': address, 'mnemonics': mnemonics, 'is_testnet': is_testnet,
                                      'version': version}

    def save_wallets(self):
        with open(self.base_path + 'wallets.json', 'r') as file:
            with open(self.base_path + f'wallets_backup_{time.time()}.json', 'w') as file_backup:
                json.dump(json.load(file), file_backup, indent=2)

        with open(self.base_path + 'wallets.json', 'w') as file:
            json.dump(self.wallets_json, file, indent=2)


storage = Storage()


async def main():
    tc = Storage()

    await tc.set_item('sasal', 'da')
    otv = await tc.get_item('sasal')
    print(otv)


if __name__ == '__main__':
    asyncio.run(main())
