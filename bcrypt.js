const {hash} = require('bcryptjs');

hash('12345678', 8, (err, hashedPassword) => {
  console.log(hashedPassword);
})
