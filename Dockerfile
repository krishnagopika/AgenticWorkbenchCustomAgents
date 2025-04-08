# Use official Node.js LTS version
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Expose the port your app runs on (change if your app uses a different port)
EXPOSE 4000

# Start the app
CMD ["node", "index.js"]