const userModel = require('../model/user');

module.exports = {
    getUser: function(req, res) {
        await userModel.find({
            username: req.body.username,
        }, (err, user) => {
            if(err) {
                console.log(err);
                res.redirect('/');
            } 
        });
    }
};