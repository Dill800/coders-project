const quizQuestionCollection = require('../database/QuizQuestionSchema')
const userContoller = require('../controllers/userController')

module.exports = {

    getQuizQuestions : async (req, res) => {
        quizQuestionCollection.find({}, (err, questionData) => {
            console.log('question data')
            
            // only send question and answers
            var questionDataNoAnswer = []
            questionData.forEach(entry => {
                var question_obj = {}
                question_obj['choices'] = entry['choices']
                question_obj['question'] = entry['question']
                questionDataNoAnswer.push(question_obj)
            })

            if(err) {
                res.send({success: 0, message: "there was an error"});
            }

            res.send({success: 1, data: questionDataNoAnswer})
        })
    },

    checkQuizAnswer : async(req, res, next) => {
        quizQuestionCollection.find({question: req.question}, (err, questionData) => {

            if(err) {
                res.send({success: 0, message: "there was an error"});
                res.end()
            }

            if (questionData.answer == req.body.answer){
                userContoller.changeStars(req.payload.username, 1)
                res.send({success: 1})
            }
            else{
                userContoller.changeStars(req.payload.username, -1)
                res.send({success: -1})
            }
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