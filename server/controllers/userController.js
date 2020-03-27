const User = require('../database/UserSchema.js')
const signToken = require('../authFuncts').signToken;

module.exports = {

    authenticate: async (req, res) => {

        User.findOne({email: req.body.username}, (err, user) => {

            if(err) {
                console.log(err);
                res.send();
            }
            
            if(!user) {
                res.send({success: 0, message: "Email Doesn't Exist"});
                return;
            }

            else if(!user.checkPassword(req.body.pw)) {
                res.send({success: 0, message: "Invalid Password"});
            }

            else {
                const token = signToken(user)

                res.send({success: 1, message: "logged in with token", token})
            }

        })

        

    },

    exists: async (req, res, next) => {

        User.findOne({email: req.body.email}, (err, user) => {
            if(err) {
                res.send({success: 0, message: 'There was some fatal error'});
            }
            if(user) {
                res.send({success: 0, message: 'User already exists!'});
            }
            else {
                next();
            }

        });
         
    },

    create: async (req, res) => {
        console.log("Creating account...")
            User.create(req.body, (err, entry) =>{
                if(err){
                    console.log(err);
                    res.send({success: 0, message: "Error during user creation..."})
                }
                if(entry){
                    res.send({success: 1, message: "user created", createdData: entry.email})
                }
            })

    }

}