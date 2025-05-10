#!/bin/bash

# Exit on error
set -e

echo "Starting application deployment..."

# Create necessary directories
mkdir -p frontend backend

# Build and start containers
docker-compose up -d --build

echo "Application deployment completed!"
echo "The application will be available at: https://your-app-name.onrender.com"
echo "Note: It may take a few minutes for the application to be fully deployed." 