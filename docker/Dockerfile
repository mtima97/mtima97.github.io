FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN chown -R node:node /app/ \
    && adduser node root

ENTRYPOINT ["tail", "-f", "/dev/null"]