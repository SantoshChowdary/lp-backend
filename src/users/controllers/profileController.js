const constants = require("../../common/constants");
const {updateUserBasicDetails} = require('../services/updateUserDetailsService')

const profileController = async (req, res) => {
    const {
        user_id,
        country,
        date_of_birth,
        email,
        gender,
        highest_degree,
        institute,
        year_of_graduation,
        first_name,
        last_name,
        occupation,
        phone_number,
        preferred_languages,
        profile_pic_url
    } = req.body;
    
    try {
        const result = await updateUserBasicDetails(req.body);

        if (result.error) {
            return res.status(result.status).send(result.message);
        } else {
            return res.status(200).send(constants.responseStrings.USER_UPDATED);
        }
        
    } catch (err) {
        return res.status(500).send(constants.responseStrings.SERVER_ERROR);
    }
};

module.exports = {
    profileController
}