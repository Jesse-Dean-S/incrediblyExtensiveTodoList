module.exports = {
    isLoggedIn: function(req, res, next) {
        if(req.isAuthenticated()) {
            console.log(req);
        }
        res.redirect('/login');
    }
}