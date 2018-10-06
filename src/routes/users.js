const express = require('express');

const userController = require('../controllers/user')

const router = express.Router();

/* users routes. */
router
  .route('/login')
  .post(userController.login)

module.exports = router;
