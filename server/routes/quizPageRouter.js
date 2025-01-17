const express = require('express')
const quizQuestionRouter = new express.Router()
const quizQuestionController = require('../controllers/quizQuestionController')

// Retrieve quiz question from the database
quizQuestionRouter.get('/', quizQuestionController.getQuizQuestions)
quizQuestionRouter.post('/', quizQuestionController.create)
quizQuestionRouter.post('/answer', quizQuestionController.checkQuizAnswer)

module.exports = quizQuestionRouter;