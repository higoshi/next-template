# builder
FROM node:16-slim as builder

WORKDIR /app

COPY ./pnpm-lock.yaml ./pnpm-workspace.yaml ./package.json ./
COPY ./packages ./packages

RUN corepack enable pnpm
RUN pnpm install --frozen-lockfile

RUN pnpm build


# Production
FROM node:16-slim as production

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

WORKDIR /app/packages/next-app

COPY --from=builder /app/packages/next-app/package.json ./
COPY --from=builder /app/packages/next-app/.next ./.next
COPY --from=builder /app/packages/next-app/public ./public

RUN corepack enable pnpm
RUN pnpm install --frozen-lockfile --prod

EXPOSE 3000

CMD ["pnpm", "start"]
