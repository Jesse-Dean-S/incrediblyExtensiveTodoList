// const something = require('../controllers/registerController');
const registerController = require('../controllers/registerController');
const express = require('express');
const {check} = require('express-validator');

var router = express.Router();

//do something validation in the route
var loginValidate = [
    //check username
    check('username', 'Username must be valid').trim().escape(),
    check('password', 'password must be legit').isLength({max:15}).trim().escape(),
    check('email', 'email must be validated').trim().escape().normalizeEmail()
]

router.get('/', registerController.getRegister); // url path for get request /register/ -> using registerController in controllers

router.post('/', loginValidate, registerController.addUsers); // url path for post request /register/ -> using registerController in controllers

module.exports = router;