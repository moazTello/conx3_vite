Ethereum Block Explorer
This project is a frontend and backend application built using Vite, React.js, Node.js, and Web3. It allows users to view the last block number of the Ethereum mainnet and retrieve the USDT balance of a provided Ethereum address.

Features
Display the last block number of the Ethereum mainnet.
Retrieve and display the USDT balance of a given Ethereum address.
Dependencies
Frontend (Vite + React.js)
Vite: A fast and lightweight development server and build tool.
React.js: A popular JavaScript library for building user interfaces.
Axios: A promise-based HTTP client for making API requests.
Web3.js: A library for interacting with Ethereum and the Ethereum blockchain.
Chakra UI: A simple and flexible UI component library for React.
React Router: A library for handling routing in React applications.
Backend (Node.js)
Express: A fast and minimalist web application framework for Node.js.
Cors: A middleware to enable cross-origin resource sharing for HTTP requests.
Dotenv: A module to load environment variables from a .env file.
Nodemon: A utility that automatically restarts the Node.js application when file changes are detected.
Web3.js: A library for interacting with Ethereum and the Ethereum blockchain.
Getting Started
To run this project locally, follow the steps below:

Clone the repository:

git clone https://github.com/moazTello/conx3_vite.git
Install the dependencies for both the frontend and backend:

cd vite_conx3
cd frontend
npm install

cd ../backend
npm install

Create a .env file in the backend directory and provide the following environment variables:
PORT = 9000
WEB3 = https://mainnet.infura.io/v3/f399c3a3417f4d3b9761c9d44c8845d8
USDT = 0xdac17f958d2ee523a2206206994597c13d831ec7

Start the backend server:

cd vite_conx
npm run server
This will start the server on http://localhost:9000.

Start the frontend development server:

cd ../frontend
npm run dev
This will start the frontend application on http://localhost:5173.

Open your browser and visit http://localhost:5173 to access the Ethereum Block Explorer.

Usage
Once the application is running, you can perform the following actions:

The homepage will display a button to view the last block number of the Ethereum mainnet.
To check the USDT balance of an Ethereum address, enter the address in the provided input field and click the "The USDT balance of the provided address" button.
The balance will be displayed below, indicating the amount of USDT tokens held by the provided address.

Contributing
Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please create an issue or submit a pull request.

License
This project is licensed under the MIT License.