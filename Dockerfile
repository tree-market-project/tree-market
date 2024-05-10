FROM node:18.17.0

WORKDIR /usr/app


RUN npm install --global pm2 tailwindcss

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

USER node

CMD [ "pm2-runtime", "npm", "--", "start"]