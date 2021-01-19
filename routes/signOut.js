const passport = require('passport');

const express = require('express'),
    router = express.Router();

router.post('/', (req, res) => {
    req.logOut();
    req.session.destroy();
    // passport.deserializeUser();
    res.redirect('/');
});

module.exports = router;