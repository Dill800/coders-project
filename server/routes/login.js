const express = require('express')
const passport = require('../controllers/passport')
const login_controller = require('../controllers/login.js')

router = express.router()

// Log access to login router
router.use((req,res,next) => {
    console.log('Login Router Accessed at Time: ', Date.now())
    next()
})

// log into account. 
router.post('/', (req, res, next) => {
    console.log('User Login: ')
    console.log(req.body)
    next()
}, passport.authenticate('local'), // see ./passport for auth strategy
(req, res) => {
    console.log('logged in', req.user);
    var userinfo = {
        username: req.user.username
    };
    res.send(userinfo);
})

// create new account
router.post('/new', (req, res) => {
    login_controller.newUser(req, res)
})

router.post('/logout', (req, res) => {
    if(req.user){
        req.logout()
        res.send({msg : 'logging out'})
    }
    else{
        res.send({msg : 'no user to log out'})
    }
})

//get user info
router.get('/user', (req, res) => {
    // TODO
})

modules.exports = router;