const express = require('express');
const cors = require('cors');
require('dotenv/config');
const authRouterV1 = require('./src/v1/routers/auth');
const userRouterV1 = require('./src/v1/routers/userRouters')

const app = express();

// To parses incoming requests with JSON
app.use(express.json());

// To enable CORS
app.use(cors());

// Authentication handler - V1
app.use("/auth/v1", authRouterV1);

// User related handlers - V1
app.use("/api", userRouterV1)


app.listen(process.env.PORT, () => console.log("server running at", process.env.PORT))