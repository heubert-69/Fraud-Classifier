FROM node:22.14.0-alpine

WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Use the correct command for your app
CMD ["npm", "run", "dev"]
