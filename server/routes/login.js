const express = require('express')
const user = require('../database/UserSchema.js')
const passport = require('../passport')


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
    console.log('User Signup')
    const {username, pw} = req.body

    user.findOne({email: username}, (err, user)=> {
        if(err){
            console.log('user.js post error when trying to find user.')
        }
        else if(user){
            res.json({error: 'Sorry, already a user with that email.'})
        }
        else{
            // the password will be automatically hashed by mongo before saving (see UserScema.js)
            const newUser = new user({
                email : username,
                password: pw
            })
            newUser.save((err, savedUser) => {
                if(err){
                    return res.json('Error saving user.')
                }
                res.json(savedUser)
            })
        }
    })
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
router.get('/', (req, res) => {

})

modules.exports = router;