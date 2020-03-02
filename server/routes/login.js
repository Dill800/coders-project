const LoginController = require('../controllers/login.js')
const express         = require('express')


router = express.router()

// Log access to login router
router.use((req,res,next) => {
    console.log('Login Router Accessed at Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {

})