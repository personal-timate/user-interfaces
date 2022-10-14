#!/usr/bin/env sh

# replace the API_URL_REPLACE token in the scripts
sed -i "s,REPLACE_CORE_SERVICE_URL,$API_URL,g" /usr/share/nginx/html/main*.js
