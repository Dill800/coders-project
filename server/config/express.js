const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    login = require('../routes/login.js'),
    passport = require('../controllers/passport')
    session = require('express-session');

module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */

    // Heroky Deployment
    mongoose.connect(process.env.MONGODB_URI, {
    //mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());

    //enable user-sessions (using cookies)
    app.use(
        session({
        secret: 'codersproject', //pick a random string to make the hash that is generated secure
        resave: false, //required
        saveUninitialized: false //require
        })
      )

    //Passport
    app.use(passport.initialize())
    app.use(passport.session()) // calls the deserializeUser

    // add a router
    app.use('/login', login);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}

