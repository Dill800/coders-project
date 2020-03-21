const express = require('express')
const accidentDataRouter = new express.Router()
const accidentDataController = require('../controllers/accidentDataController.js')

// Creating a new account
accidentDataRouter.post('/', accidentDataController.create)
accidentDataRouter.get('/', accidentDataController.get)
accidentDataRouter.get('/accidentsOnDay', accidentDataController.getCountOnDate)

module.exports = accidentDataRouter