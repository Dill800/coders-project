import express from './config/express.js'
import mongoose from 'mongoose'
import config from './database/db_config.js'
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));

mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Database Connection Successful");
});
