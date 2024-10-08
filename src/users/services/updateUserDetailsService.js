
const {getUserByUserID} = require('../../auth/models/loginModel');
const {updateUserByUserID} = require('../models/userModel');


const updateUserBasicDetails = async () => {

    const { user_id, ...userDetails } = req.body;

    try {
        

        for (const key in userDetails) {
            if (userDetails[key] === null || userDetails[key] === undefined) {
                return {error: true, status: 400, message: `${key} cannot be null`};
            }
        };

        const user = await getUserByUserID(user_id);

        if (!user) {
            return {error: true, status: 404, message: constants.responseStrings.INVALID_USER };
        };

        const updatedUser = await updateUserByUserID(user_id, userDetails);
        console.log(updatedUser);

        return updatedUser;

    } catch (error) {

        console.error(error);
        throw error;
    }

};


module.exports = {
    updateUserBasicDetails
}