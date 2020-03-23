const axios = require('axios')
const config = require('../config/config')

module.exports = {

    getWeather: async (req, res) => {

        // /key/lat/long/2018-10-24T19:06:32

        let result = await axios.get('https://api.darksky.net/forecast/' + config.darkSkyApiKey + '/' + req.latitude + ',' + req.longitude + ',2020-03-01T19:06:32')

        res.send({
            latitude: result.data.latitude,
            longitude: result.data.longitude,
            summary: result.data.currently.summary,
            precipProbability: result.data.currently.precipProbability,
            weather: result.data.currently.precipType
        })

    },

    getCoordinates: async (req, res, next) => {

        //https://api.opencagedata.com/geocode/v1/json?q=Gainesville%2C%20Florida&key=20e0b22d3e504d529a4bcb34edf99542&language=en&pretty=1

        let result = await axios.get('https://api.opencagedata.com/geocode/v1/json?q=Gainesville%2C%20Florida&key=' + config.openCageKey + '&language=en&pretty=1')

        req.latitude = result.data.results[0].geometry.lat;
        req.longitude = result.data.results[0].geometry.lng;

        next();
    }

}