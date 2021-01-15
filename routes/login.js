const passport = require('passport');
const express = require('express');
const router = express.Router();

router.post('/', passport.authenticate("local", {failureRedirect: '/'}), (req, res, next) => {
    console.log(req.user);
    res.redirect('/dashboard');
});

module.exports = router;