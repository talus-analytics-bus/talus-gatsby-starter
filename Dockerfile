FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y \
  jq \
  awscli

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8000 8080

CMD ["npm", "run", "start"]
