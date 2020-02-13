FROM node:lts

WORKDIR /usr/src/app

COPY src ./

COPY package*.json ./

RUN npm install --production && npm audit fix --only=prod

CMD ["npm", "run", "start:docker"]
