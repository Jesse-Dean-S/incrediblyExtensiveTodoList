const express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    userModel = require('./model/user'),
    registerRoutes = require('./routes/register'),
    loginRoutes = require('./routes/login'),
    dashboardRoutes = require('./routes/dashboard');
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    expressSession = require('express-session'),
    connectEnsureLogin = require('connect-ensure-login'),
    flash = require('flash')(),
    passportLocalMongoose = require('passport-local-mongoose');

var mongoDB = 'mongodb://localhost:27017/tododb';
mongoose.connect(mongoDB, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
        app.listen(8080, (req, res) => {
         console.log("localhost started");
        });
        app.locals.db = db;
        console.log("connected");
    }
);


app.set("view engine", "ejs");
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({
    secret: 'jesse is cool',
    resave: false,
    saveUninitialized: false
}));
app.use(flash);
app.use(passport.initialize());
app.use(passport.session());

passport.use(userModel.createStrategy());

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

app.use('/register/', registerRoutes);
app.use('/login/', loginRoutes);
app.use('/dashboard/', dashboardRoutes);
app.get('/', (req, res) => {
    let title_name;
    res.render("home/index", { title_name: "home" });
});

app.get('/login', (req, res) => {
    let title_name;
    res.render('login/login', { title_name: "login" });
})




