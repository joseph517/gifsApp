FROM node:18.17.0-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install -g @angular/cli

RUN npm install

COPY . /app

EXPOSE 4200

CMD [ "npm", "start" ]
