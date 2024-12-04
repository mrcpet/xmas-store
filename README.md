# Web shop project - JavaScript 4 - Nackademin

After installing dependencies, run the following to start the project

## API:

npx json-server christmas_products.json --port 5020

## backend:

Node with Express.js, port 5001

### .env

PORT=5001  
BASE_URL=http://localhost:5020

## frontend:

React, port 3001

### .env

VITE_BASE_URL=http://localhost:5001/api
