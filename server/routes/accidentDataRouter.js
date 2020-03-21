const express = require('express')
const accidentDataRouter = new express.Router()
const accidentDataController = require('../controllers/accidentDataController.js')

// Creating a new account
userRouter.post('/', accidentDataController.create)
userRouter.get('/', accidentDataController.get)
userRouter.get('/accidentsOnDay', accidentDataController.getCountOnDate)

module.exports = accidentDataRouter