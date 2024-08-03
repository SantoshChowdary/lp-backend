const jwt = require('jsonwebtoken');
require('dotenv/config');

// Generating JWT Token
const generateJWTToken = async (userId) => {
    const jwtToken = jwt.sign({userId : userId}, process.env.JWT_SECRET_KEY, {expiresIn: '100h'});
    return jwtToken;
};

// verify token
const verifyJWTToken = async (token) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err){
            return {error : 404, message : "Invalid Token"}
        } else {
            return decoded
        }
    })
}


module.exports = {
    generateJWTToken,
    verifyJWTToken
};


