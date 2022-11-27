FROM node:15-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . ./
RUN npm run build
CMD ["npm", "start"]