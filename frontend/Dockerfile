FROM node:8
WORKDIR /app
RUN npm install -g @angular/cli@1.7.3
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD npm start
