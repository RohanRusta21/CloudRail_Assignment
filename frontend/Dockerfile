FROM node:8
LABEL Maintainer="Rohan"
WORKDIR /app
RUN npm install -g @angular/cli@1.7.3
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD npm start
