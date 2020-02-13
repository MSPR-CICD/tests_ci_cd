FROM node:lts

WORKDIR /usr/src/app

COPY src src/

COPY package*.json ./

RUN ls -lR /usr/src/app

RUN npm install --production && npm audit fix --only=prod

CMD ["node", "src/index.js"]
