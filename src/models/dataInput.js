const db = require('../database/dbConnection');

const createUsersTable = `
    CREATE TABLE users (
        user_id VARCHAR(75) PRIMARY KEY,
        name varchar(200) not NULL,
        mobile_number varchar(15) not null,
        email_id varchar(50) not null,
        password varchar(50) not null
)`;

const getTables = `
    SELECT * FROM users
`;

const insertData = `
  INSERT INTO users (user_id, name, mobile_number, email_id, password) 
  VALUES ('144128d9-abbb-4261-b199-78e9cdbe9c57', 'Santosh', '9866021291', 'santoshssk923@gmail.com', 'santosh9491')
`;

const dropTable = `
  DROP table users
`

db.query(getTables, (err, results) => {
  if (err) {
    console.error('Error creating users table:', err.message);
    return;
  }
  console.log(results.rows);
});

db.end();