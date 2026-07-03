docker compose down

git reset --hard HEAD
git pull origin master

cp nginx.conf /etc/nginx/nginx.conf;
nginx -s reload

docker compose up -d --build
