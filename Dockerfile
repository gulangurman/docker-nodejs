FROM node:16-alpine

# This is the container path we'll work on
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy over the source files
COPY . .

# App will bind to this port
EXPOSE 8080

# Run start script
CMD ["npm", "start"]