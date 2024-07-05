FROM node:8
LABEL Maintainer="Rohan"
WORKDIR /app
ARG release=1.0.0
RUN npm install -g @angular/cli@1.7.3
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD npm start
