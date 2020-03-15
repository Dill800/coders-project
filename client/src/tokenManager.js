const jwt = require('jsonwebtoken')

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

module.exports.getToken = getToken;
module.exports.setToken = setToken;
module.exports.getCurrentUser = getCurrentUser;
module.exports.removeToken = removeToken;