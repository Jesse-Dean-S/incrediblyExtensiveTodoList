const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const postModel = require('./post');

var userSchema = new mongoose.Schema({
    username: { type: String, unqiue: true, required: true },
    email: { type: String, unique: true, required: true },
    posts: [{
        postTitle: {type: String, required: true},
        postBody: {type:String, required: true},
        postTags: {type: String, required:true}
    }],
    active: { type: Boolean, default: true },
});


userSchema.plugin(passportLocalMongoose, {usernameField: 'username', passwordField: 'password'});

module.exports = mongoose.model('user', userSchema);