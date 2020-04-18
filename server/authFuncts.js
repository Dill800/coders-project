const jwt = require('jsonwebtoken')
const User = require('./database/UserSchema')
const secret = process.env.secret || 'thesecret'

function signToken(user) {
    const userData = user.toObject();
    delete userData.passwordHash;
    return jwt.sign(userData, secret, {expiresIn: 140000})
    //const username = userData.email;
    //return jwt.sign({username: username}, secret, {expiresIn: 140000})
}

function authToken(req, res, next){
    const token = req.cookies.token

    if (!token){
       console.log("No token.")
       return res.status(401).end()
    }

    var payload
    try {
        // Parse the JWT string and store the result in `payload`.
        // Note that we are passing the key in this method as well. This method will throw an error
        // if the token is invalid (if it has expired according to the expiry time we set on sign in),
        // or if the signature does not match
        payload = jwt.verify(token, secret)
      } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
          // if the error thrown is because the JWT is unauthorized, return a 401 error
          console.log("JWT unauthorized error.")
          return res.status(401).end()
        }
        // otherwise, return a bad request error
        console.log("Bad request.")
        return res.status(400).end()
      }

    req.payload = payload

    // now the user is authorized!
    console.log("User token authorized.")
    next()
}


module.exports.signToken = signToken;
module.exports.authToken = authToken;