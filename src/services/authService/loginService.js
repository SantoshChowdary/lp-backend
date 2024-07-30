const {getUserByMobileNumber, addNewUserToDB} = require("../../models/authModel/loginModel");
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

const addNewUserToDBService = async (userData) => {
    try {
        const result = await addNewUserToDB(userData);
        return true
    } catch (err) {
        console.log(err)
        return false;
    }
}

module.exports = {
    verifyLoginMobileNumber,
    addNewUserToDBService
}