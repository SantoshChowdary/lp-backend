const db = require('../dbConnection');

const createUsersTable = `
   CREATE TABLE resource_configs (
        resource_id VARCHAR(50) NOT NULL,
        default_unlock BOOLEAN,
        PRIMARY KEY (resource_id),
        FOREIGN KEY (resource_id) REFERENCES resources(resource_id)
    );
`;

db.query(createUsersTable, (err, results) => {
  if (err) {
    console.error('Error creating users table:', err.message);
    return;
  }
  console.log(results.rows);
});

db.end();