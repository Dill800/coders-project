const User = require('../database/UserSchema.js')


function newUser(req, res){
    console.log('\n')
    console.log('User Signup')
    console.log(req.body);
    const {email, pw, city, state} = req.body
    console.log('\n')
    User.findOne({email: email}, (err, user)=> {
        console.log('finding one');
        if(err){
            console.log('user.js post error when trying to find user.')
        }
        else if(user){
            console.log('already user in there');
            res.status(500).send();
        }
        else{
            // the password will be automatically hashed by mongo before saving (see UserScema.js)
            console.log('Adding user to DB...');
            const newUser = new User({
                email : email,
                city : city,
                state: state,
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