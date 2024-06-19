FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y \
  jq \
  awscli

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8000 8080

CMD ["sh", "-c", "if [ ${RUN_MODE} = 'build' ]; then npm run build; else npm run start; fi"]
