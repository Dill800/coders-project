const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const  config = require('./config/config.js')
const path = require('path')

const userRouter = require('./routes/userRouter')
 
// Use env port or default
const port = process.env.PORT || 5000;

// Using libraries
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/users', userRouter);

// heroku deploy first priority, then take config file
mongoose.connect(process.env.MONGODB_URI || config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Database Connection Successful");
    console.log(process.env.MONGODB_URI)
    console.log(config.db.uri)
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Server now running on port ${port}!`));