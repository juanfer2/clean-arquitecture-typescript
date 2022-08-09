FROM node:18-alpine3.15

# Create app directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./

COPY package.json .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# RUN npm run build
RUN npx prisma db push

RUN npm run migrate

RUN npm run prisma-generate

EXPOSE 4001

CMD [ "npm", "run", "dev" ]
