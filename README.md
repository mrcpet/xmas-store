# Web shop project - JavaScript 4 - Nackademin

After installing dependencies, run the following to start the project

## Backend directory including mock API

Node with Express.js, port 5001

npm run dev

npx json-server christmas_products.json --port 5020

### .env

The backend folder needs a .env file with the following:

PORT=5001  
BASE_URL=http://localhost:5020

## Frontend directory

React, port 3000

npm run dev

### .env

The frontend folder needs a .env file with the following:

VITE_BASE_URL=http://localhost:5001/api

## Tests

Frontend tests available using the following script

npm test

#### Now you should be good to go!