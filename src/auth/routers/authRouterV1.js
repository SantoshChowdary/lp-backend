const express = require('express');
const {loginController, verifyPasswordController, signupController} = require('../controllers/loginController')
const db = require("../../database/dbConnection");

const authRouterV1 = express.Router();


// login
authRouterV1.post('/login/:mobileNumber', loginController);

//verify password
authRouterV1.post('/verify', verifyPasswordController);

// signup
authRouterV1.post('/signup', signupController)



module.exports = authRouterV1;

