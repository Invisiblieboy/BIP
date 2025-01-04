cp /usr/dev/BIP/Web_app/nginx.conf /etc/nginx/nginx.conf;
nginx -s reload

killall python uvicorn

cd /usr/dev/BIP
python -m main &

cd /usr/dev/BIP/API
uvicorn main:app --port 8000 --no-access-log &

