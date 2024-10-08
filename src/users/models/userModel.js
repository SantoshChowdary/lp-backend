const db = require('../../database/dbConnection');
const constants = require("../../common/constants")
const { promisify } = require('util');

const query = promisify(db.query).bind(db);

const updateUserByUserID = async (user_id, userDetails) => {
    const updateQuery = 'UPDATE users SET first_name = $1, last_name = $2, email = $3, mobile_number = $4, password = $5, profile_pic_url = $6, occupation = $7, preferred_languages = $8, year_of_graduation = $9 WHERE user_id = $10';

    try {
        const results = await query(updateQuery, [userDetails.first_name, userDetails.last_name, userDetails.email, userDetails.mobile_number, userDetails.password, userDetails.profile_pic_url, userDetails.occupation, userDetails.preferred_languages, userDetails.year_of_graduation, user_id]);
        return results.rows[0];
    } catch (err) {
        console.error(err);
        throw new Error('Database error');
    }
}

module.exports = {
    updateUserByUserID
}


