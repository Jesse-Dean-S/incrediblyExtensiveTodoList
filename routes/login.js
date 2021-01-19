const passport = require('passport');
const express = require('express');
const router = express.Router();

router.post('/', passport.authenticate("local", {failureRedirect: '/'}), (req, res, next) => {
    req.session.username = req.body.username;
    console.log(req.user);
    res.redirect('/dashboard');
});

module.exports = router;