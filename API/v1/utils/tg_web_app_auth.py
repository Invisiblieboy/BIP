import hashlib
import hmac
import json
from dataclasses import dataclass
from operator import itemgetter
from typing import Any
from urllib.parse import parse_qsl

from utils.config import BOT_TOKEN


@dataclass(eq=False)
class AuthError(Exception):
    status: int = 403
    detail: str = "unknown auth error"

    @property
    def message(self) -> str:
        return f"Auth error occurred, detail: {self.detail}"


class WebAppAuth:
    def __init__(self, bot_token: str = BOT_TOKEN) -> None:
        self._bot_token = bot_token
        self._secret_key = self._get_secret_key()

    def get_user_id(self, init_data: str) -> int:
        return int(json.loads(self.validate(init_data)["user"])["id"])

    def _get_secret_key(self) -> bytes:
        return hmac.new(key=b"WebAppData", msg=self._bot_token.encode(), digestmod=hashlib.sha256).digest()

    def validate(self, init_data: str) -> dict[str, Any]:
        try:
            parsed_data = dict(parse_qsl(init_data, strict_parsing=True))
        except ValueError as err:
            raise AuthError(detail="invalid init data") from err
        if "hash" not in parsed_data:
            raise AuthError(detail="missing hash")
        hash_ = parsed_data.pop("hash")
        data_check_string = "\n".join(f"{k}={v}" for k, v in sorted(parsed_data.items(), key=itemgetter(0)))
        calculated_hash = hmac.new(
            key=self._secret_key,
            msg=data_check_string.encode(),
            digestmod=hashlib.sha256,
        ).hexdigest()
        if calculated_hash != hash_:
            raise AuthError(detail="invalid hash")
        return parsed_data


if __name__ == '__main__':
    data = WebAppAuth().validate(
        'query_id=AAHiNEJWAAAAAOI0Qla67ZAy&user=%7B%22id%22%3A1447179490%2C%22first_name%22%3A%22%D0%AF%D1%80%D0%B8%D0%BA%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22spiwt%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F9SZwBc-iprAdJF-pRQRbeqPFZ2SxgRhzKwjFFAiFQh0.svg%22%7D&auth_date=1734385005&signature=AaCfS5oUUyqx4VoNtXNFTR5_uzdCkEIorf7z1dZHQbJaOOcEpqSFN6ABFWDu1I910LYpilC9FNpUxZnniiXZBg&hash=e63118b3305cee60d012e95066b7fdb01c86e12405c31860faf0edc9809e0db6')
    print(data)
