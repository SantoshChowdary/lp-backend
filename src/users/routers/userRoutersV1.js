const { menuOptionsController } = require("../controllers/menuOptionController");
const {profileController} = require("../controllers/profileController")
const express = require('express');

const userRouterV1 = express.Router();


// Menu Options
userRouterV1.post('/menu-options', menuOptionsController);

// user basic details
userRouterV1.post('/edit-profile', profileController)


module.exports = userRouterV1;