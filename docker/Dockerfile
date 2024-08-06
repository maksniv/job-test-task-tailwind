FROM node:20.14.0

ARG PORT

WORKDIR /project

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]