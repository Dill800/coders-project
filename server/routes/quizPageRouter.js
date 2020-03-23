const express = require('express')
const quizQuestionRouter = new express.Router()
const quizQuestionController = require('../controllers/accidentDataController.js')

// Creating a new account
quizQuestionRouter.get('/quiz', quizQuestionController.get)

module.exports = quizQuestionRouter;