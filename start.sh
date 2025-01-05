cp /usr/dev/BIP/Web_app/nginx.conf /etc/nginx/nginx.conf;
nginx -s reload

killall python uvicorn

cd /usr/dev/BIP/Crypto_admin
python -m main &
cd /usr/dev/BIP/API
python -m main &
cd /usr/dev/BIP/Tg_bot
python -m tg_bot &

cd /usr/dev/BIP/API
uvicorn main:app --port 8000 --no-access-log &

