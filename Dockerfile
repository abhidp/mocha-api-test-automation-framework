FROM node:alpine

COPY package-lock.json .
COPY package.json .
RUN npm install

COPY . .

RUN npm test
