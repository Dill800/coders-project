const express = require('express')
const userRouter = new express.Router()
const userController = require('../controllers/userController')

// Creating a new account
userRouter.post('/', userController.exists, userController.create)
userRouter.post('/login', userController.authenticate)


module.exports = userRouter