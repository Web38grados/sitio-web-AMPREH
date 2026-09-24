#!/bin/sh
set -e

PORT="${PORT:-8080}"

cat > /etc/nginx/conf.d/default.conf <<EOF
server {
  listen ${PORT};
  server_name _;
  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files \$uri \$uri/ /index.html;
  }

  location /assets/ {
    try_files \$uri =404;
  }
}
EOF

exec nginx -g 'daemon off;'
