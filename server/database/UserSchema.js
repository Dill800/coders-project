const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');


const collectionName = 'users'
const userSchema = new mongoose.Schema({
	email : {type: String, required: true},
	address : {type: String, required: true},
	city : {type: String, required: true},
	state: {type: String, required: true},
    passwordHash : {type: String, required: true},
	accessLevel : {type: mongoose.Number, required: true},
	stars : {type: mongoose.Number, required : true},
	dashcamInCar : {type : Boolean, required : true}
});

// Password hashing methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.passwordHash)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

userSchema.pre('save', function(next) {
    if (!this.passwordHash) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		this.passwordHash = this.hashPassword(this.passwordHash)
		next()
	}
})

var User = mongoose.model(collectionName, userSchema);
module.exports = User