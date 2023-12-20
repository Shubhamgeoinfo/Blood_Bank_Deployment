Blood Bank Management MERN Stack App

Table of Contents
Introduction
Features
Prerequisites
Installation
Configuration
Usage
Authentication
Inventory Management
Concurrently Setup
Dependencies
Environment Variables
Contributing
License

Introduction

Welcome to the Blood Bank Management MERN Stack App! This application is designed to efficiently manage blood bank operations with user-friendly interfaces for different roles: user, admin, hospital, and organization. It utilizes the MERN stack, consisting of MongoDB for the database, Express.js for the backend, React for the frontend, and Node.js for server-side scripting. The app also implements JWT token-based authentication for secure access.

Features
User, Admin, Hospital, and Organization Authentication
Blood Inventory Management
Blood Group In and Out Tracking
Secure JWT Token Authentication
Role-Based Access Control
React for Dynamic Frontend
Express.js for Robust Backend
MongoDB for Efficient Database Management

Prerequisites
Before installing the application, ensure you have the following:
Node.js installed
MongoDB installed and running
npm package manager installed

Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blood-bank-management.git
   cd blood-bank-management
   ```

2. Install dependencies for both the client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

Configuration

Configure the application by setting up environment variables. Create a `.env` file in the `server` directory with the following variables:

```env
PORT=8080
JWT_SECRET=your_secret_key
MONGO_URL=your_mongo_db_connection_string
Add other necessary environment variables
```

Usage
To start the application, run the following commands in the root directory:

```bash
npm run dev
```

This will concurrently start the server and client.

Authentication

User Authentication: Users can log in using their credentials, and JWT tokens are issued upon successful authentication.

Role-Based Access Control: Different roles (user, admin, hospital, organization) have specific permissions within the application.

Inventory Management

Blood Inventory: Admins can manage the inventory of different blood groups.

In and Out Tracking: Users and admins can track the inflow and outflow of blood units for each blood group.

Concurrently Setup

The app utilizes the `concurrently` package to run both the client and server concurrently during development. The script is configured in `package.json`:

```json
"scripts": {
  "dev": "concurrently \"npm run server\" \"npm run client\""
}
```

Dependencies
Client: React, Redux, Axios, React Router
Server: Express.js, MongoDB, Mongoose
Authentication: JWT Token
Middleware: Cors, Morgan, Colors, Dotenv
Concurrently: Run multiple npm scripts concurrently

Environment Variables

`PORT`: The port on which the server will run.
`JWT_SECRET`: Secret key for JWT token generation.
`MONGO_URL`: MongoDB connection string.
Add any other environment variables as needed.

Contributing

Feel free to contribute to the development of this Blood Bank Management application. Please follow the [contribution guidelines](CONTRIBUTING.md).

License
This project is licensed under the [MIT License](LICENSE).


//For deployment on server modify the code in server.js

//import path from "path";
//import { fileURLToPath } from "url";

//ES module fix dirname after database config

//const **filename = fileURLToPath(import.meta.url);
//const **dirname = path.dirname(\_\_filename);

//middleware
app.use(express.static(path.join(__dirname, "./client/build")));



//rest api
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



