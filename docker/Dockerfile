FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN addgroup -S superss && \
    adduser -S timka -G superss && \
    chown -R timka:superss /app

USER timka

ENTRYPOINT ["tail", "-f", "/dev/null"]