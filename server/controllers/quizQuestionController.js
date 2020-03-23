const quizQuestionCollection = require('../database/QuizQuestionSchema')

module.exports = {

    getQuizQuestionByID : async (req, res) => {
        quizQuestionCollection.findOne({questionID: req.body.questionID}, (err, questionData) => {
            if(questionData){
                res.send({success: 1, data: questionData});
            }
            if(err){
                res.send({success: 0 , message: "ERROR: Couldn't not retreive question with ID: " + 
                req.body.questionID + " from the database"});
            }
            
        })
    }
}