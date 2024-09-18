FROM node:lts-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY . .

RUN chown -R node:node /app/ \
    && adduser node root

ENTRYPOINT ["tail", "-f", "/dev/null"]