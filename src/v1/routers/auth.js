const express = require('express');
const {loginController, verifyPasswordController} = require('../../controllers/authControllers/loginController')
const db = require("../../database/dbConnection");

const authRouterV1 = express.Router();


// login
authRouterV1.post('/login/:mobileNumber', loginController);

//verify password
authRouterV1.post('/verify', verifyPasswordController)



module.exports = authRouterV1;

