const loginService = require("../../services/authService/loginService");
const {generateJWTToken} = require('../../services/authService/tokenService')
const constants = require("../../common/constants");
const { v4: uuidV4 } = require('uuid');
const bcrypt = require('bcrypt');
require('dotenv/config');


const loginController = async (req, res) => {
    const { mobileNumber } = req.params;

    try {
        const result = await loginService.verifyLoginMobileNumber(mobileNumber);

        if (result.error) {
            return res.status(result.status).send(result.message);
        } else {
            return res.status(200).send(constants.responseStrings.LOGIN_SUCCESS);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send(constants.responseStrings.SERVER_ERROR);
    }
};

const verifyPasswordController = async (req, res) => {
    const { mobileNumber, password } = req.body;

    try {
        const result = await loginService.verifyLoginMobileNumber(mobileNumber);

        if (result.error) {
            return res.status(result.status).send(result.message);
        } else {
            const isPasswordValid = await bcrypt.compare(password, result.password);
            const newJwtToken = await generateJWTToken(result.user_id)
            
            if (isPasswordValid) {
                let userData = {
                    userId: result.user_id,
                    userName: result.name,
                    emailId: result.email_id,
                    mobileNumber: result.mobile_number,
                    token : newJwtToken,
                    expiresIn : 100
                };
                return res.status(200).json(userData);
            } else {
                return res.status(401).send(constants.responseStrings.INVALID_PASSWORD);
            }
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send(constants.responseStrings.SERVER_ERROR);
    }
}

const signupController = async (req, res) => {
    const { name, mobileNumber, email, password } = req.body;

    try {
        const result = await loginService.verifyLoginMobileNumber(mobileNumber);

        if (result.error && result.status === 404) {
            const newUserId = uuidV4();
            const hashedPassword = await bcrypt.hash(password, 10);

            const isUserAdded = await loginService.addNewUserToDBService({
                newUserId, name, mobileNumber, email, password: hashedPassword
            });

            if (isUserAdded) {
                return res.status(201).send(newUserId);
            } else {
                return res.status(500).send(constants.responseStrings.DATABASE_ERROR);
            }
        } else if (result.error) {
            return res.status(result.status).send(result.message);
        } else {
            return res.status(400).send(constants.responseStrings.EXISTING_USER);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send(constants.responseStrings.SERVER_ERROR);
    }
};


module.exports = {
    loginController,
    verifyPasswordController,
    signupController
}