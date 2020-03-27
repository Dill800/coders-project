const express = require('express')
const accidentDataRouter = new express.Router()
const accidentDataController = require('../controllers/accidentDataController.js')
const weatherController = require('../controllers/weatherController')

// Creating a new account
accidentDataRouter.post('/', accidentDataController.create)
accidentDataRouter.get('/', accidentDataController.getAll)
accidentDataRouter.get('/accidentsOnDay', accidentDataController.getCounts)

// query params:
//date=yyyy-mm-dd, city='City Name', state='State Name'

// Returns city, accidents, and weather on a particular day
accidentDataRouter.get('/totalInfo', accidentDataController.getCounts, weatherController.getCoordinates, weatherController.getWeather)

// gets distinct city/state values in database
accidentDataRouter.get('/distinct', accidentDataController.getDistinctCities)

module.exports = accidentDataRouter