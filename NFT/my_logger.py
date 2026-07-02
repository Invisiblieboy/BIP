import sys
import time

from fastapi import Request
from loguru import logger

logger.remove()
logger.add(sys.stdout, format="{time:YYYY-MM-DD HH:mm:ss} | <level>{level: <8}</level> | {message}")


async def log_requests(request: Request, call_next):
    start_time = time.perf_counter()
    response = await call_next(request)
    process_time_ms = (time.perf_counter() - start_time) * 1000

    client_ip = request.client.host if request.client else "unknown"

    status_code = response.status_code
    if status_code >= 400:
        log_func = logger.error
    elif status_code >= 300:
        log_func = logger.warning
    else:
        log_func = logger.debug

    log_func(
        f"IP: {client_ip} | \"{request.method} {request.url.path}\" -> Status: {status_code} | Time: {process_time_ms:.2f}ms"
    )
    return response
