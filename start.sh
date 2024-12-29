cp /usr/dev/BIP/Web_app/nginx.conf /etc/nginx/nginx.conf;
nginx -s reload

killall python uvicorn

python /usr/dev/BIP/Tg_bot/tg_bot.py &

cd /usr/dev/BIP/API
python main.py &
uvicorn main:app --port 8000 --no-access-log &

cd /usr/dev/BIP/Crypto_admin
python main.py &
python helper/tg_bot.py &
