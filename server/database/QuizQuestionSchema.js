const mongoose = require('mongoose')

const collectionName = 'quiz'
const quizQuestionSchema = new mongoose.Schema({
    question : {type: String, required: true},
    
    // Storing answer choices in a Map instead of array to check correct answer easier
    // Mongoose Map keys are always strings
    choices : {type : Array, of : String, required : true},
    answer : {type: mongoose.Number, required: true},
});

// Method to check for correct answer
quizQuestionSchema.methods = {
    checkAnswer : function(answerChoiceKey){
        return answerChoiceKey == this.correctAnswerKey;
    }
}

var quizQuestionCollection = mongoose.model(collectionName, quizQuestionSchema, 'quiz');
module.exports = quizQuestionCollection;