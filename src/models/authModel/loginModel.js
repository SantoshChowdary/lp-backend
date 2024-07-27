const db = require('../../database/dbConnection');
const constants = require("../../common/constants")
const { promisify } = require('util');

const query = promisify(db.query).bind(db);

const getUserByMobileNumber = async (mobileNumber) => {

    // need to cover mobileNumber with '', otherwise it'll take it as bigInt
    const userQuery = `
        SELECT * FROM users WHERE mobile_number = '${mobileNumber}'
    `;

    try {
        const results = await query(userQuery);
        if (results.rows.length === 0) {
            return constants.responseStrings.INVALID_USER;
        }
        return results.rows[0];
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    getUserByMobileNumber
}