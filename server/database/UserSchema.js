const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');


const collectionName = 'users'
const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    passwordHash : {type: String, required: true},
    accessLevel : {type: mongoose.Number, required: true}
});

// Password hashing methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

userSchema.pre('save', function(next) {
    if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model(collectionName, userSchema);
module.exports = User;