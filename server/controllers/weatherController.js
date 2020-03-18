const axios = require('axios')
const config = require('../config/config')

module.exports = {

    getWeather: async (req, res) => {

        // /key/lat,long,2018-10-24T19:06:32

        let result = await axios.get('https://api.darksky.net/forecast/' + config.darkSkyApiKey + '/' + req.latitude + ',' + req.longitude + ',' + req.query.datetime)

        res.send({
            latitude: result.data.latitude,
            longitude: result.data.longitude,
            summary: result.data.currently.summary,
            precipProbability: result.data.currently.precipProbability,
            weather: result.data.currently.precipType
        })

    },

    getCoordinates: async (req, res, next) => {

        let result = await axios.get('https://api.opencagedata.com/geocode/v1/json?q=' + req.query.city + '%2C%20' + req.query.state + '&key=' + config.openCageKey + '&language=en&pretty=1')

        req.latitude = result.data.results[0].geometry.lat;
        req.longitude = result.data.results[0].geometry.lng;

        next();
    }

}