FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install

EXPOSE 3000/tcp

ENTRYPOINT [ "bun", "run", "server.ts" ]
