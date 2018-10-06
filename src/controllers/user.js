const getAllUserDataByUsername = require('../database/quries/get_all_user_data_by_username');
const bcryptCompare = require('../helpers/bcrypt_compare');
const createToken = require('../helpers/create_token');

const userController = module.exports = {}

userController.login = (req, res, next) => {
  // get username and password from request body
  console.log(req.body,'reqqqq');
  const { username, password: plainPassword } = req.body
  console.log(username,'username');
  // console.log(password,'password');
  console.log(plainPassword,'plainPassword');
  getAllUserDataByUsername(username)
  .then(queryResult => {
    if (!queryResult) return res.status(401).json({err: true, message: `Login failed: unvalied username or password`})
    bcryptCompare(plainPassword, queryResult.password)
    .then(isValied => {
      if(!isValied) return res.status(401).json({err: true, message: `Login failed: unvalied username or password`})
      createToken({
        firstName: queryResult.first_name,
        middleName: queryResult.middle_name,
        lastName: queryResult.last_name,
        roleId: queryResult.role_id,
      })
      .then(token =>{
        res
        .cookie('token', token)
        .status(201)
        .json({err: null})
      })
      .catch({err: true, message: `server error`})
    })
    .catch({err: true, message: `server error`})
  })
  .catch({err: true, message: `server error`})
}
