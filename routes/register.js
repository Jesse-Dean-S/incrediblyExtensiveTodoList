// const something = require('../controllers/registerController');
const registerController = require('../controllers/registerController');
const express = require('express');

var router = express.Router();

router.get('/', registerController.getRegister); // url path for get request /register/ -> using registerController in controllers

router.post('/', registerController.addUsers); // url path for post request /register/ -> using registerController in controllers

module.exports = router;