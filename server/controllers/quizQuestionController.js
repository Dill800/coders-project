const quizQuestionCollection = require('../database/QuizQuestionSchema')

module.exports = {

    getQuizQuestions : async (req, res) => {
        quizQuestionCollection.find({}, (err, questionData) => {
            console.log('question data')
            console.log(questionData)
            if(err) {
                res.send({success: 0, message: "there was an error"});
            }

            res.send({success: 1, data: questionData})
        })
    },

    create: async (req, res) => {
        quizQuestionCollection.create(req.body, (err, entry) => {

            if(err){
                console.log(err)
                res.send({success: 0, message: 'Error while creating data entry...'})
            }
            if(entry){
                res.send({success: 1, message: 'Data entry created', createdData: entry})
            }
        });
    }
}