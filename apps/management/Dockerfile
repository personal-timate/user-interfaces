ARG NODE_VERSION=16.10.0
ARG NGINX_VERSION=1.18


FROM node:${NODE_VERSION}-alpine AS node-build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY /decorate-angular-cli.js /usr/src/app/decorate-angular-cli.js
RUN yarn install
COPY . .
RUN yarn run build

FROM nginxinc/nginx-unprivileged:${NGINX_VERSION}-alpine as nginx
ARG TIME_ZONE=Europe/Berlin
USER root
RUN rm -rf /usr/share/nginx/html/*
RUN echo "************" && find /usr/share -name "zoneinfo"
RUN mkdir -p /opt/var/cache/nginx && \
    cp -a --parents /usr/lib/nginx /opt && \
    cp -a --parents /usr/share/nginx /opt && \
    cp -a --parents /var/log/nginx /opt && \
    cp -aL --parents /var/run /opt && \
    cp -a --parents /etc/nginx /opt && \
    cp -a --parents /etc/passwd /opt && \
    cp -a --parents /etc/group /opt && \
    cp -a --parents /usr/sbin/nginx /opt && \
    cp -a --parents /usr/sbin/nginx-debug /opt && \
    cp -a --parents /lib/libcrypto.so.* /opt && \
    cp -a --parents /lib/libz.* /opt && \
    cp -a --parents /lib/libc.* /opt && \
    cp -a --parents /lib/ld-musl-x86_64.so.* /opt && \
    cp -a --parents /lib/libssl.so.* /opt && \
    cp -a --parents /usr/lib/lib* /opt && \
    cp /usr/share/zoneinfo/${TIME_ZONE:-ROC} /opt/etc/localtime

FROM gcr.io/distroless/base-debian10:debug as debian
ENV BASE_URL="/"
ENV AUTH_URL="/"
ENV API_URL="/"
SHELL ["/busybox/sh", "-c"]
COPY --chown=1001 --from=nginx /opt* /
EXPOSE 80
STOPSIGNAL SIGTERM
USER 1001
COPY --chown=1001 /apps/management/docker ./docker
COPY --chown=1001 /nginx.conf /etc/nginx/nginx.conf
COPY --chown=1001 --from=node-build /usr/src/app/dist/* /usr/share/nginx/html

ENTRYPOINT ["sh", "./docker/docker-entrypoint.sh"]
CMD ["nginx", "-g", "pid /tmp/nginx.pid; daemon off;"]
