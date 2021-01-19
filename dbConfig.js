mongoose = require('mongoose'),

module.exports = {
    dbInitialize: function(mongoDbLink, app) {
        mongoose.connect(mongoDbLink, { useNewUrlParser: true }, (err, db) => {
            if (err) throw err;
                app.listen(8080, (req, res) => {
                 console.log("localhost started");
                });
                app.locals.db = db;
                console.log("connected");
            }
        );
    }
}