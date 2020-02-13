FROM node:lts

WORKDIR /usr/src/app

COPY src ./src

COPY package*.json ./

RUN ls -lR

RUN npm install --production && npm audit fix --only=prod

CMD ["npm", "run", "start:docker"]
