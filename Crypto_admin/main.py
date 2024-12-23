import threading
import time

from send import appTransactions

if __name__ == '__main__':
    threading.Thread(target=appTransactions._start, args=[1, ], daemon=True).start()

    while 1:
        time.sleep(100)
