# Stage 1: Build the Ember application
FROM node:16 as builder

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json /app/

# Install app dependencies
RUN npm install

# Copy the app source
COPY . /app

# Build the application
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]
