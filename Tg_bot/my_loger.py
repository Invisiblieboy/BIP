import sys

from aiogram import types, BaseMiddleware
from loguru import logger

logger.remove()
logger.add(sys.stdout, format="{time:YYYY-MM-DD HH:mm:ss} | <level>{level: <8}</level> | {message}")


class LoggingMiddleware(BaseMiddleware):
    async def __call__(self, handler, event: types.Message, data):
        user = event.from_user
        if user:
            username = f"@{user.username}" if user.username else "no_username"
            text = event.text or "[Медиа/Кнопка]"
            logger.debug(f"USER: {user.id} | {username} ({user.full_name}) -> {text}")
        return await handler(event, data)
