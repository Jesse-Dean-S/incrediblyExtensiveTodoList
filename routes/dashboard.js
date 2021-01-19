const express = require('express'),
    isLoggedIn = require('../loginCheck'),
    connectEnsureLogin = require('connect-ensure-login'),
    userModel = require('../model/user');
    router = express.Router();

router.get('/', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    
    //get data and render appropriately 
    var newObject = {
        username: req.session.username
    }

    console.log(newObject.username);
    let getPosts = await userModel.findOne({username: req.session.username});
    console.log(`this is the result: ${getPosts}`);
    userPosts = getPosts.posts;
    console.log(userPosts);
    res.render('dashboard/dashboard', {newObject, userPosts});
});



module.exports = router;