#!/bin/bash

# Exit on error
set -e

echo "Removing application..."

# Stop and remove containers
docker-compose down -v

# Remove directories
rm -rf frontend backend

echo "Application removal completed!" 