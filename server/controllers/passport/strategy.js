const User = require('../../database/UserSchema.js')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
    {usernameField : 'username', passwordField: 'pw'},
    (username, password, done) => {
        User.findOne({email: username}, (err, user) => {
            if (err){
                return done(err);
            }
            if(!user){
                return done(null, false, {message: 'Incorrect username'});
            }
            if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
        })
    }
)

module.exports = strategy