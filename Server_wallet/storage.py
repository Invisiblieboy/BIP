import asyncio
import json
import os.path
from pprint import pprint

import redis.asyncio as redis

client = redis.Redis(host='localhost', port=6379, protocol=2)


class Storage:
    base_key = 'BIP_sw_'

    async def set_item(self, key: str, value: str | dict):
        if isinstance(value, dict):
            await self.set_item(key, json.dumps(value))
        else:
            await client.set(name=self.base_key + key, value=value)

    async def get_item(self, key: str, default_value: str = None, full_key: bool = False):
        if not full_key:
            key = self.base_key + key
        value = await client.get(name=key)
        return value.decode() if value else default_value

    async def remove_item(self, key: str):
        await client.delete(self.base_key + key)

    async def save(self, file_mame, key) -> None:
        data = json.loads(await self.get_item(key))
        if not os.path.exists('data'):
            os.mkdir('data')
        with open(f'data/{file_mame}.json', 'w') as f:
            json.dump(data, f, indent=2)

    async def load(self, file_mame, key) -> None:
        with open(f'data/{file_mame}.json', 'r') as f:
            data = json.load(f)
        await self.set_item(key, data)
        return data


storage = Storage()


async def main():
    pprint(await client.keys())
    pprint(await storage.get_item('BIP_id2wallet', full_key=True))
    tc = Storage()

    await tc.set_item('sasal', 'da')
    otv = await tc.get_item('sasal')
    print(otv)


if __name__ == '__main__':
    asyncio.run(main())
