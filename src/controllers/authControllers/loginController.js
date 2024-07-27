const loginService = require("../../services/authService/loginService");
const constants = require("../../common/constants")

const loginController = async (req, res) => {
    const {mobileNumber} = req.params;

    try {
        const result = await loginService.verifyLoginMobileNumber(mobileNumber);

        if (result === constants.responseStrings.INVALID_USER){
            return res.status(404).send(result)
        } else if (result === constants.responseStrings.DATABASE_ERROR){
            return res.status(500).send(result)
        } else {
            return res.status(200).send(result.user_id);
        }

    } catch (err) {
        return res.status(500).send(constants.responseStrings.SERVER_ERROR)
    }
};

const verifyPasswordController = async (req, res) => {
    const {mobileNumber, password} = req.body;

    try {
        const result = await loginService.verifyLoginMobileNumber(mobileNumber);
        if (result === constants.responseStrings.INVALID_USER){
            return res.status(404).send(result)
        } else if (result === constants.responseStrings.DATABASE_ERROR){
            return res.status(500).send(result)
        } else {
            if (result.password === password){
                let userData = {
                    userId : result.user_id,
                    userName : result.name,
                    emailId : result.email_id,
                    mobileNumber : result.mobile_number
                }
                return res.status(200).json(userData)
            } else {
                return res.status(401).send()
            }
        }

    } catch (err) {
        return res.status(500).send(constants.responseStrings.SERVER_ERROR)
    }
}


module.exports = {
    loginController,
    verifyPasswordController
}