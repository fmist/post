FROM node:15-alpine
WORKDIR /app
#ENV PATH="./node_modules/.bin:$PATH"
COPY package.json /app/package.json
RUN npm install
COPY . ./
RUN npm run build
CMD ["npm", "start"]