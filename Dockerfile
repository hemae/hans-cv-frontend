FROM node:16.15.0

RUN mkdir /hans-cv-frontend

WORKDIR /usr/hans-cv-frontend

COPY ./package*.json ./

RUN yarn install

COPY ./ ./

RUN yarn build

EXPOSE 3000

USER node

CMD [ "yarn", "start" ]
