FROM node:alpine3.14

WORKDIR /app

COPY . .

RUN  npm install

ENV test="3345678"

CMD ["node","server.js"]

EXPOSE 3000