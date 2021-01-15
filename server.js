const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./model/user');
const registerRoutes = require('./routes/register');
const sessions = require('express-session');
const PORT = 8080;

app.set("view engine", "ejs");
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));



app.use(sessions({
    secret: 'work hard',
    resave: true,
    saveUninitialized: falses
}));



app.use('/register/', registerRoutes);


app.get('/', (req, res) => {
    let title_name;
    res.render("home/index", { title_name: "home" });
});

app.get('/login', (req, res) => {
    let title_name;
    res.render('login/login', { title_name: "login" });
})




var mongoDB = 'mongodb://localhost:27017/tododb';
mongoose.connect(mongoDB, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    app.listen(8080, (req, res) => {
        console.log("localhost started");
    });
    app.locals.db = db;
    console.log("connected");
});