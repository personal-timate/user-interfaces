#!/usr/bin/env sh

# replace the KEYCLOAK_URL_REPLACE token in the scripts
sed -i "s,REPLACE_AUTH_URL,$AUTH_URL,g" /usr/share/nginx/html/main*.js
