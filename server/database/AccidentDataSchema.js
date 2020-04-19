const mongoose = require('mongoose')

const collectionName = 'accidents'
const accidentDataSchema = new mongoose.Schema({
    date : {type: String, required: true},
    city : {type: String, required: true},
    state : {type: String, required: true},
    street1 : {type: String, required: true},
    street2 : {type: String, required: false},
    accidents : {type: mongoose.Number, required: true},
});

// might have issue with all lowercasing collection name
var accidentData = mongoose.model(collectionName, accidentDataSchema);

module.exports = accidentData