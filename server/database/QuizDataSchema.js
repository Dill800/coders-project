const mongoose = require('mongoose')

const collectionName = 'quizData'
const quizDataSchema = new mongoose.Schema({
    questionText : {type: String, required: true},
    
    // Storing answer choices in a Map instead of array to check correct answer easier
    // Mongoose Map keys are always strings
    answerChoices : {type : Map, of : String}, required : true,
    correctAnswerKey : {type: String, required: true},
});

// Method to check for correct answer
quizDataSchema.methods = {
    checkAnswer : function(answerChoiceKey){
        return answerChoiceKey == correctAnswerKey;
    }
}

var quizDataCollection = mongoose.model(collectionName, quizDataSchema);
module.exports = quizDataCollection;