const mongoose = require('mongoose')

const collectionName = 'accidentData'
const accidentDataSchema = new mongoose.Schema({
	date : {type: Date, required: true},
    accidents : {type: int, required: true},
});

var accidentData = mongoose.model(collectionName, accidentDataSchema);
module.exports = accidentData