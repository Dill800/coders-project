const jwt = require('jsonwebtoken')
const User = require('./database/UserSchema')
const secret = process.env.secret || 'thesecret'

function signToken(user) {
    const userData = user.toObject();
    delete userData.passwordHash;
    return jwt.sign(userData, secret)
}

module.exports.signToken = signToken;