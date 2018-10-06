const { compare } = require('bcryptjs');

module.exports = (plainPassword, hash) => {
  return new Promise((resolve, reject) => {
    compare(plainPassword, hash, (err, res) => {
      if (err) return reject(err)
      if (res) return resolve(true);
      return resolve(false)
    });
  })
}
