const User = require('../database/UserSchema.js')
const signToken = require('../authFuncts').signToken;

module.exports = {

    authenticate: async (req, res) => {

        const user = await User.findOne({email: req.body.username}, (err, user) => {

            if(err) {
                console.log(err);
                res.send();
            }

            if(!user) {
                res.send({success: 0, message: "Email Doesn't Exist"});
                return;
            }

            if(!user.checkPassword(req.body.pw)) {
                res.send({success: 0, message: "Invalid Password"});
            }


        })

        const token = await signToken(user)

        res.send({success: 1, message: "logged in with token", token})

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

        try {
            User.create(req.body);
            
            res.send({success: 1, message: "user created"})
        }
        catch (err) {
            console.log(err)
        }
    }
}