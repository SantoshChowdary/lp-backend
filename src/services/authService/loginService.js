const {getUserByMobileNumber} = require("../../models/authModel/loginModel");
const constants = require("../../common/constants")

const verifyLoginMobileNumber = async (mobileNumber) => {

    try {
        const result = await getUserByMobileNumber(mobileNumber);
        if (result === constants.responseStrings.INVALID_USER){
            return result
        }
        return result
    } catch (err){
        return constants.responseStrings.DATABASE_ERROR;
    }
};

module.exports = {
    verifyLoginMobileNumber
}