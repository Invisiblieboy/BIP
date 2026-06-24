from data.config import TONAPI_KEY, BIP_JETTON_MASTER_ADDRESS
from tonutils.client import TonapiClient
from tonutils.wallet import HighloadWalletV3
from tonutils.wallet.data import TransferJettonData


class Seller:
    def __init__(self, seed_phrase: list[str]):
        self._client = TonapiClient(api_key=TONAPI_KEY, is_testnet=False)
        self.__wallet_H3, public_key, private_key, mnemonic = HighloadWalletV3.from_mnemonic(self._client, seed_phrase)

    async def sendBIP(self, data_list: list[tuple[str, float, str]]) -> str:
        # (ADDRESS, AMOUNT, COMMENT)
        transactions = []
        for trans in data_list:
            transactions.append(
                TransferJettonData(
                    destination=trans[0],
                    jetton_master_address=BIP_JETTON_MASTER_ADDRESS,
                    jetton_amount=trans[1],
                    forward_payload=trans[2],
                )
            )
        return await self.__wallet_H3.batch_jetton_transfer(data_list=transactions)
