#!/usr/bin/env sh

# replace the BASE_URL_REPLACE token in the scripts
sed -i "s,BASE_URL_REPLACE,$BASE_URL,g" /usr/share/nginx/html/main*.js

# replace the BASE_URL_REPLACE token in the index.html
sed -i "s,BASE_URL_REPLACE,$BASE_URL,g" /usr/share/nginx/html/index.html

# replace the base href in case it is empty and not the replace token
sed --in-place "s,<base href=\"\/\"\s*/>,<base href=\"$BASE_URL\" />," /usr/share/nginx/html/index.html
