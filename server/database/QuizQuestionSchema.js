const mongoose = require('mongoose')

const collectionName = 'quizQuestionData'
const quizQuestionSchema = new mongoose.Schema({
    questionID : {type : String, required: true},
    questionText : {type: String, required: true},
    
    // Storing answer choices in a Map instead of array to check correct answer easier
    // Mongoose Map keys are always strings
    answerChoices : {type : Map, of : String}, required : true,
    correctAnswerKey : {type: String, required: true},
});

// Method to check for correct answer
quizQuestionSchema.methods = {
    checkAnswer : function(answerChoiceKey){
        return answerChoiceKey == correctAnswerKey;
    }
}

var quizQuestionCollection = mongoose.model(collectionName, quizQuestionSchema);
module.exports = quizQuestionCollection;