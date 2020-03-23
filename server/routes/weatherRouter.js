const express = require('express')
const weatherRouter = new express.Router()
const weatherController = require('../controllers/weatherController')

// Creating a new account
weatherRouter.get('/', weatherController.getCoordinates, weatherController.getWeather)

module.exports = weatherRouter