FROM node:10.15.0

RUN npm install npm -g
RUN npm install -g yarn

WORKDIR /app
ADD . /app

RUN yarn install --check-files

#CMD ["node", "index.js"]
