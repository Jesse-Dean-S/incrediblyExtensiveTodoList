const express = require('express'),
    mongoose = require('mongoose'),
    postModel = require('../model/post'),
    userModel = require('../model/user'),
    router = express.Router();

router.post('/create', (req, res) => {
    let postBody = {
        postTitle: req.body.postTitle,
        postBody: req.body.postBody,
        postTags: req.body.postTags
    };
    console.log('entered here');
    userModel.findOneAndUpdate({username: req.session.username}, {$push: {'posts': {
        'postTitle': postBody.postTitle,
        'postBody': postBody.postBody,
        'postTags': postBody.postTags
    }}},{new: true}, (err, result) => {
        if(err) throw err;
        console.log(`this is the post result: ${result}`);
    })
    console.log(`this is the thing: ${userModel.findOne({username: req.session.username}, 'post')}`)
    res.redirect('/dashboard');
});

module.exports = router;