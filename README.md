# Fanapp-frontend
UI project that shows the Fan details and provides the facility to increase or decrease the speed and change the direction.

Prerequisites

Docker: The application is containerized, and its deployment is orchestrated using Docker Compose.

Quick Start
To quickly get started with the frontend, follow these steps:

Pull the Docker Image:
```bash
docker pull dahiyaajay2022/fanapp-frontend:v1.1
```
Run with Docker Compose:

Ensure you have the latest docker-compose.yml file from the FanApp-backend repository.(git clone https://github.com/dahiyaajay2022/Fanapp-backend.git)
```bash
docker-compose up
```
This command will also start the backend and the database as they are defined in the compose file.

Access the App:

Once the containers are running, access the frontEnd at:
```bash
http://localhost:3000
```

Development

If you wish to run the project locally for development:

Install Dependencies:

Navigate to the root directory of Fanapp-frontend:
```bash
npm install
```
Start the Development Server:
```bash
npm start
```

This will launch the React development server, usually on http://localhost:3000.

Interaction with Backend

The front end interacts with the backend REST API, which by default is configured to connect to http://localhost:8080. Ensure the backend is running and accessible at this URL or modify the frontend configuration to point to a different backend URL.


