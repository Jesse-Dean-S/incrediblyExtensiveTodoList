const passport = require('passport');
const User = require('../model/user');

module.exports = {
    getRegister: function (req, res) {
        //send to register page
        res.render('register/register', { title_name: "Bob", });
    },
    addUsers: function (req, res) {
        console.log(`the username: ${req.body.username} and the password ${req.body.password} and email is ${req.body.email}`)
        User.register(new User({username: req.body.username, email: req.body.email, password: req.body.password}), req.body.password, function(err, user) {
            if(err) {
                console.log(err);
                res.redirect('/register');
            }
            passport.authenticate("local")(req, res, function() {
                res.redirect('/dashboard');
            })
            
        })
    }
}