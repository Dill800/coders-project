const express = require('express')
const quizQuestionRouter = new express.Router()
const quizQuestionController = require('../controllers/accidentDataController.js')

// Retrieve quiz question from the database
quizQuestionRouter.get('/quiz', quizQuestionController.getQuizQuestionByID)

module.exports = quizQuestionRouter;