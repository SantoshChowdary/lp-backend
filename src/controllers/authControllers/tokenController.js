require('dotenv/config');
const jwt = require('jsonwebtoken');
const {verifyJWTToken} = require('../../services/authService/tokenService')
const constants = require('../../common/constants')


const authMiddleware = async (req, res, next) => {
    const authBody = req.headers["Authorization"];
    const token = authBody.split(" ")[1];

    if (!authBody || !token){
        return res.status(400).send(constants.responseStrings.TOKEN_REQUIRED);
    };

    const verificationRes = await verifyJWTToken(token);

    if (verificationRes?.error){
        return res.status(400).send(constants.responseStrings.INVALID_TOKEN)
    } else {
        next()
    } 
}