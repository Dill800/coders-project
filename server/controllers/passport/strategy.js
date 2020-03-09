const User = require('../../database/UserSchema.js')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
    {usernameField : 'username', passwordField: 'pw'},
    (username, password, done) => {
        User.findOne({email: username}, (err, user) => {
            console.log('searching for info in database')
            if(user === null) {
                console.log('User not in database');
                return done(err);
            }
            if (err){
                console.log("Error, not found")
                return done(err);
            }
            if(!user){
                console.log("Incorrect Username")
                return done(null, false, {message: 'Incorrect username'});
            }
            if (!user.checkPassword(password)) {
                console.log("Wrong password");
				return done(null, false, { message: 'Incorrect password' })
            }
            console.log("Error, null")
			return done(null, user)
        })
    }
)

module.exports = strategy