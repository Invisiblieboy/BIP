
from data.storage import storage
async def main():
    await storage.set_item('processed_transactions', 'first')
    await storage.set_item('last_transaction_timestamp', 1734889015)


if __name__ == '__main__':
    import asyncio

    asyncio.run(main())