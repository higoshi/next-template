# builder
FROM node:16-slim as builder

WORKDIR /next-app

COPY package.json ./
COPY yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn/ ./.yarn

RUN corepack enable yarn
RUN yarn install --immutable

COPY . .

RUN yarn build


# Production
FROM node:16-slim as production

WORKDIR /next-app

COPY package.json ./
COPY yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn/ ./.yarn

COPY --from=builder /next-app/.next ./.next
COPY --from=builder /next-app/public ./public

RUN corepack enable yarn
RUN yarn install --immutable

EXPOSE 3000

CMD ["yarn", "start"]
