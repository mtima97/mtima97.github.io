FROM node:lts

ARG GITHUB_TOKEN

ENV GITHUB_TOKEN=$GITHUB_TOKEN

RUN apt-get update && \
    apt-get install -y git && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN chown -R node:node /app

USER node

ENTRYPOINT ["tail", "-f", "/dev/null"]