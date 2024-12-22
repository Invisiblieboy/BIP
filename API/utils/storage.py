import asyncio

import redis.asyncio as redis

client = redis.Redis(host='localhost', port=6379)


class Storage:
    base_key = 'BIP_'

    async def set_item(self, key: str, value: str):
        await client.set(name=self.base_key + key, value=value)

    async def get_item(self, key: str, default_value: str = None):
        value = await client.get(name=self.base_key + key)
        return value.decode() if value else default_value

    async def remove_item(self, key: str):
        await client.delete(self.base_key + key)


storage = Storage()


async def main():
    tc = Storage()

    await tc.set_item('sasal', 'da')
    otv = await tc.get_item('sasal')
    print(otv)


if __name__ == '__main__':
    asyncio.run(main())
