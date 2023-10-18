# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the project
RUN npm run build

# Expose port 5173 for the application to be accessible
EXPOSE 5173

# Define the command to run the application
CMD [ "npm", "run", "preview" ]
