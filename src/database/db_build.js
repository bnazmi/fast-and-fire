const fs = require('fs');
const path = require('path');
const dbConnection = require('./db_connection');

const dbBuild = (fileName, cb) => {
  const sql = fs.readFileSync(path.join(__dirname, fileName)).toString();
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
};
// dbBuild('db_build.sql',(err,res)=>{
//   console.log(err,'errrrrrrrrrrr');
//   console.log(res,'resssssssssssssssss');
// })
module.exports = dbBuild;
