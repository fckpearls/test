# Simple Todo Application

This is a simple Todo application deployed to Render.com. The application consists of:
- Frontend (React)
- Backend (Node.js/Express)
- PostgreSQL Database

## Prerequisites
- Docker
- Docker Compose
- Git

## Project Structure
```
.
├── frontend/           # React frontend application
├── backend/           # Node.js backend application
├── prepare-app.sh     # Script to prepare and deploy the application
├── remove-app.sh      # Script to remove the application
└── docker-compose.yml # Docker Compose configuration
```

## Setup and Deployment

1. Clone the repository
2. Make the scripts executable:
   ```bash
   chmod +x prepare-app.sh remove-app.sh
   ```
3. Run the prepare script:
   ```bash
   ./prepare-app.sh
   ```

## Removing the Application

To remove the application and all associated services:
```bash
./remove-app.sh
```

## Features
- HTTPS enabled by default (provided by Render.com)
- Automatic container restart on failure
- Persistent data storage using PostgreSQL
- Multi-container architecture
- Automated deployment scripts # test
