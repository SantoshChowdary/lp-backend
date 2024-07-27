const express = require('express');
require('dotenv/config');

const authRouterV1 = require('./src/v1/routers/auth');

const app = express();

// To parses incoming requests with JSON
app.use(express.json());

// Authentication handler - V1
app.use("/auth/v1", authRouterV1);


app.listen(process.env.PORT, () => console.log("server running at", process.env.PORT))