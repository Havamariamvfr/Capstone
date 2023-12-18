FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

# Expose the port that your app will run on 
EXPOSE 5000

CMD [ "node", "index.js" ]
