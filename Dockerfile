FROM node

WORKDIR  /usr/app

COPY package.json ./

RUN npm install 

COPY . .

EXPOSE 8989

CMD ["npm","run","start"]