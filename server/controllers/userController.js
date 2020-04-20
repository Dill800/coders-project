const User = require('../database/UserSchema.js')
const signToken = require('../authFuncts').signToken;

module.exports = {

    updatePrivilege: async(req, res) => {

        User.findOneAndUpdate({email: req.body.email}, {accessLevel: req.body.newAccessLevel}, (err, doc) =>{
            if(err){
                console.log("Error updating access level.")
                res.send('error')
                return;
            }

            res.send(doc)
            
        })


    },

    getUsers: async (req, res) => {

        console.log("We're in getUsers")

        User.find({}, (err, userList) => {

            if(err) {
                res.send("there was an error")
            }

            console.log(userList)
            res.send({data: userList})
            return;
        })

    },

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
                // store token as cookie for future 
                res.cookie('token', token, {maxAge: 14000000})
                console.log("Cookie sent.")
                res.send({success: 1, message: "logged in with token", token})
            }

        })

        

    },

    exists: async (req, res, next) => {
        console.log("Checking for account...")
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

    },

    getStars: async(req, res) => {
        console.log(req.query)
        console.log("Getting stars...")
        User.findOne({email: req.query.email}, (err, entry) => {
            if(err){
                console.log(err);
                res.send({success: 0, message: "Error during user query..."})
            }
            if(entry){
                res.send({success: 1, stars: entry.stars})
            }
            else {
                res.send("nighting")
            }
        })
    },

    changeStars: async(user, stars) => {
        User.findOneAndUpdate({email: user}, {$inc: {stars: stars}}, (err, doc) =>{
            if(err){
                console.log("Error changing user stars.")
            }
            console.log(doc)
        })
    }

}