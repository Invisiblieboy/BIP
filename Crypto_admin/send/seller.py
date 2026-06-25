from ton_core import NetworkGlobalID
from tonutils.clients import ToncenterClient
from tonutils.contracts import WalletHighloadV3R1, JettonTransferBuilder

from data.config import BIP_JETTON_MASTER_ADDRESS


class Seller:
    def __init__(self, seed_phrase: list[str]):
        self._client = ToncenterClient(network=NetworkGlobalID.MAINNET)
        self.__wallet_H3, public_key, private_key, mnemonic = WalletHighloadV3R1.from_mnemonic(self._client,
                                                                                               seed_phrase)

    async def sendBIP(self, data_list: list[tuple[str, float, str]]) -> str:
        # (ADDRESS, AMOUNT, COMMENT)
        transactions = []
        for trans in data_list:
            transactions.append(
                JettonTransferBuilder(
                    destination=trans[0],
                    jetton_master_address=BIP_JETTON_MASTER_ADDRESS,
                    jetton_amount=int(trans[1] * 1e9),
                    forward_payload=trans[2],
                )
            )
        async with self._client:
            tx = await self.__wallet_H3.batch_transfer_message(transactions)

        if not tx:
            Exception('Транзакция НЕ успешна, нет id транзакции')
        return tx.normalized_hash
