const { menuOptionsController } = require("../../controllers/userControllers/menuOptionController");
const express = require('express');

const userRouterV1 = express.Router();


// Menu Options
userRouterV1.post('/menu-options', menuOptionsController);


module.exports = userRouterV1;