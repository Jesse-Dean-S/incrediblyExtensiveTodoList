const { check } = require('express-validator');
const { MaxKey } = require('mongodb');
var userModel = require('../model/user');
const {validationResult} = require('express-validator');



module.exports = {
    getRegister: function (req, res) {
        //send to register page
        res.render('register/register', { title_name: "Bob", });
    },
    addUsers: function (req, res) {
        //add users to db .. added soon
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            console.log(errors);
            res.redirect('/register/');
        } else {
            console.log(req.body.username);
            let newUser = {
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            }
            userModel.create(newUser, (err, user) => {
                if(err) return next(err);
                console.log(`saving to db ${user}`);
                return res.redirect('/register/');
            });
            // .then(data => {
            //     console.log(`returned data ${data}`);
            // })
            // .catch(err => {
            //     console.log(`reported error is : ${err}`);
            // })
        }
    }
}