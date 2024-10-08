const db = require('../../database/dbConnection');
const constants = require("../../common/constants")
const { promisify } = require('util');

const query = promisify(db.query).bind(db);

const getUserByMobileNumber = async (mobileNumber) => {

    // need to cover mobileNumber with '', otherwise it'll take it as bigInt
    const userQuery = 'SELECT * FROM users WHERE mobile_number = $1';

    try {
        const results = await query(userQuery, [mobileNumber]);
        if (results.rows.length === 0) {
            return null;
        }
        return results.rows[0];
    } catch (err) {
        console.error(err);
        throw new Error('Database error');
    }
};

const getUserByUserID = async (user_id) => {
    const userQuery = 'SELECT * FROM users WHERE user_id = $1';

    try {
        const results = await query(userQuery, [user_id]);
        return results.rows[0];
    } catch (err) {
        console.error(err);
        throw new Error('Database error');
    }
}
const getUserByEmailId = async (email) => {

    const userQuery = 'SELECT * FROM users WHERE email_id = $1';

    try{
        const results = await query(userQuery, [email]);
        if (results.rows.length === 0){
            return null;
        };
        return results.rows[0];
    } catch (err){
        console.log(err);
        throw new Error('Database error')
    }
}

const addNewUserToDB = async ({newUserId, name, mobileNumber, email, password}) => {
    const userQuery = `
        INSERT INTO users (user_id, name, mobile_number, email_id, password) 
        VALUES ($1, $2, $3, $4, $5)
    `;

    try {
        const result = await query(userQuery, [newUserId, name, mobileNumber, email, password]);
        return result.rowCount > 0;
    } catch (err) {
        console.error('Database error', err);
        throw new Error('Database error');
    }
};

// db.end();

module.exports = {
    getUserByMobileNumber,
    addNewUserToDB,
    getUserByEmailId,
    getUserByUserID
}