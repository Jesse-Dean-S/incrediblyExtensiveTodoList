const express = require('express'),
    app = express(),
    path = require('path'),
    userModel = require('./model/user'),
    registerRoutes = require('./routes/register'),
    loginRoutes = require('./routes/login'),
    dashboardRoutes = require('./routes/dashboard'),
    signOutRoutes = require('./routes/signOut'),
    mongoDBConfig = require('./dbConfig');
    postRoutes = require('./routes/post'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    expressSession = require('express-session'),
    connectEnsureLogin = require('connect-ensure-login'),
    flash = require('flash')(),
    passportLocalMongoose = require('passport-local-mongoose');

var mongoDB = 'mongodb://localhost:27017/tododb';
mongoDBConfig.dbInitialize(mongoDB, app);
app.set("view engine", "ejs");
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({
    secret: 'jesse is cool',
    resave: false,
    saveUninitialized: false,
    maxAge: 30*1000
}));
app.use(flash);
app.use(passport.initialize());
app.use(passport.session());

passport.use(userModel.createStrategy());

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());


/*
**
** ROUTES **
**
*/
app.use('/register/', registerRoutes);
app.use('/login/', loginRoutes);
app.use('/dashboard/', dashboardRoutes);
app.use('/post/', postRoutes);
app.use('/signOut', signOutRoutes);
/*
**
** END ROUTES **
**
*/


app.get('/', (req, res) => {
    let title_name;
    res.render("home/index", { title_name: "home" });
});

app.get('/login', (req, res) => {
    let title_name;
    res.render('login/login', { title_name: "login" });
})




