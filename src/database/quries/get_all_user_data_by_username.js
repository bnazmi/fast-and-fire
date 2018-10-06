const dbConnection = require('../db_connection');

module.exports = (username) => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT * FROM "user" WHERE username = $1',
    values: [username],
  }
  dbConnection.query(sql, (err, result) => {
    if (err) return reject(err);
    resolve(result.rows[0]);
  });
});
