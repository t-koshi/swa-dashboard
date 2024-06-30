FROM node:20.15.0-bookworm-slim as base
WORKDIR /swap-dashboard

RUN [ "npm", "install", "-g", "npm@10.7.0" ]

FROM base as dev
ENV NODE_ENV=development
COPY ./package*.json ./

RUN [ "npm", "install" ]