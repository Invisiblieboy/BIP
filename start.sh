killall python uvicorn
git add .
git commit -m "DINAXY"
git pull origin master

cp /usr/dev/BIP/nginx.conf /etc/nginx/nginx.conf;
nginx -s reload

cd /usr/dev/BIP/Crypto_admin
python -m main &
cd /usr/dev/BIP/API
python -m main &
cd /usr/dev/BIP/Tg_bot
python -m tg_bot &

cd /usr/dev/BIP/API
uvicorn main:app --port 8000 --no-access-log &

cd /usr/dev/BIP/NFT
uvicorn main:app --port 8100 --no-access-log &

