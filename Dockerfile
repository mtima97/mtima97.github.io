FROM node:lts-alpine

ARG GITHUB_TOKEN

ENV GITHUB_TOKEN=$GITHUB_TOKEN

RUN apk add --no-cache git

WORKDIR /app

COPY . .

RUN chown -R node:node /app/ \
    && adduser node root

ENTRYPOINT ["tail", "-f", "/dev/null"]