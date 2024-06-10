FROM node

WORKDIR /Projects/Airline Management System/API-Gateway

COPY . .

RUN npm ci

CMD [ "npm","run","dev" ]

