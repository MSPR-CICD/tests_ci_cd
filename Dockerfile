FROM node:lts

WORKDIR /usr/src/app

COPY . /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install --production && npm audit fix --only=prod

RUN ls -lR /usr/src/app

CMD ["npm", "run", "start:docker"]
