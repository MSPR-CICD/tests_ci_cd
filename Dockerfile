FROM node:lts

WORKDIR /usr/src/app

COPY dist ./

COPY package*.json ./

RUN npm install --production && npm audit fix --only=prod

CMD ["npm", "run", "start:docker"]
