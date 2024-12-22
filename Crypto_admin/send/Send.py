from tonutils.client import TonapiClient
from tonutils.wallet import WalletV4R2

from data.config import TONCENTER_API_KEY,SENDER_SEED_PHRASE,BIP_JETTON_MASTER_ADDRESS


class Seller:
    def __init__(self):
        self._client = TonapiClient(api_key=TONCENTER_API_KEY, is_testnet=False)
        self.__wallet_V4R2, public_key, private_key, mnemonic = WalletV4R2.from_mnemonic(self._client,
                                                                                         SENDER_SEED_PHRASE.split(' '))

    async def sendBIPSingle(self, destination_address, jetton_amount, comment=None):
        await self.__wallet_V4R2.transfer_jetton(
            destination=destination_address,
            jetton_master_address=BIP_JETTON_MASTER_ADDRESS,
            jetton_amount=jetton_amount,
            jetton_decimals=9,
            forward_payload=comment,
        )
