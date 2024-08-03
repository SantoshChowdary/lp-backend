const {getUserByMobileNumber, addNewUserToDB} = require("../../models/authModel/loginModel");
const constants = require("../../common/constants")

const verifyLoginMobileNumber = async (mobileNumber) => {

    try {
        const result = await getUserByMobileNumber(mobileNumber);

        if (!result) {
            return { error: true, status: 404, message: constants.responseStrings.INVALID_USER };
        }
        return result;
    } catch (err) {
        console.error(err);
        return { error: true, status: 500, message: constants.responseStrings.DATABASE_ERROR };
    }
};

const addNewUserToDBService = async (userData) => {
    try {
        const result = await addNewUserToDB(userData);
        return result;
    } catch (err) {
        console.error(err);
        return false;
    }
};



module.exports = {
    verifyLoginMobileNumber,
    addNewUserToDBService
}