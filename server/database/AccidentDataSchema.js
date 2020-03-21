const mongoose = require('mongoose')

const collectionName = 'accidentData'
const accidentDataSchema = new mongoose.Schema({
	date : {type: Date, required: true},
    accidents : {type: mongoose.Number, required: true},
});

var accidentData = mongoose.model(collectionName, accidentDataSchema);
module.exports = accidentData