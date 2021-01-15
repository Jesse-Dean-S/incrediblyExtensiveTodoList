const express = require('express'),
    isLoggedIn = require('../loginCheck'),
    connectEnsureLogin = require('connect-ensure-login'),
    router = express.Router();

router.get('/', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    console.log(`the username is: ${req.user.username}`);
    let newObject = {
        username: req.user.username,
        email: req.user.email
    }
    res.render('dashboard/dashboard', {newObject});
})

module.exports = router;