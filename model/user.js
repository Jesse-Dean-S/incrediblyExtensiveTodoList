var mongoose = require('mongoose');
var bCrypt = require('bcrypt');
var userSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    username: { type: String, unqiue: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    role: { type: String, default: "user" }
}, {
    collection: 'user'
});



userSchema.pre('save', function(next){
    var user = this;
    bCrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err);
        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('user', userSchema);