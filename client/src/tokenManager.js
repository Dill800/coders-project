const jwt = require('jsonwebtoken')
const secret = process.env.secret || 'thesecret'

function getToken() {
    return localStorage.getItem('token');
}

function setToken(token) {
    localStorage.setItem('token', token);
}

function getCurrentUser() {
    const token = this.getToken();
    return (token ? jwt.decode(token) : null)
}

function removeToken() {
    localStorage.removeItem('token');
    // delete axios headers
}

function isValid() {
    try {
    jwt.verify(this.getToken(), secret)
    }
    catch {
        return false;
    }

    return true;
}

module.exports.getToken = getToken;
module.exports.setToken = setToken;
module.exports.getCurrentUser = getCurrentUser;
module.exports.removeToken = removeToken;
module.exports.isValid = isValid;