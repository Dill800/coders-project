const User = require('../database/UserSchema.js')


function newUser(req, res){
    console.log('User Signup')
    const {name, username, pw} = req.body
    console.log(req.body)
    User.findOne({email: username}, (err, user)=> {
        if(err){
            console.log('user.js post error when trying to find user.')
        }
        else if(user){
            res.json({error: 'Sorry, already a user with that email.'})
        }
        else{
            // the password will be automatically hashed by mongo before saving (see UserScema.js)
            const newUser = new User({
                name: name,
                email : username,
                passwordHash: pw,
                accessLevel: 0
            })
            newUser.save((err, savedUser) => {
                if(err){
                    return res.json('Error saving user.')
                }
                res.json(savedUser)
            })
        }
    })
}

module.exports = newUser