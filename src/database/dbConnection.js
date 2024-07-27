const { Pool } = require('pg');
require('dotenv/config');


const db = new Pool({
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER_NAME,
    password : process.env.DB_KEY,
    database : process.env.DB_NAME
});

db.connect(err => {
    if (err){
        console.log("db error", err)
    } else {
        console.log("PostgreSQL database connected")
    }

});


module.exports = db;