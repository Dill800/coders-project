const axios = require('axios')

const darkSkyKey = process.env.darkSkyKey || require('../config/config').darkSkyApiKey;
const openCageKey = process.env.openCageKey || require('../config/config').openCageKey;

module.exports = {

    getWeather: async (req, res) => {

        // /key/lat/long/2018-10-24T19:06:32

        let result = await axios.get('https://api.darksky.net/forecast/' + darkSkyKey + '/' + req.latitude + ',' + req.longitude + ',' + req.query.date + 'T12:06:32')

        res.send({
            city: req.query.city,
            weather: result.data.currently.summary,
            accidents: req.accidents
        })

        /*
        res.send({
            latitude: result.data.latitude,
            longitude: result.data.longitude,
            summary: result.data.currently.summary,
            precipProbability: result.data.currently.precipProbability,
            weather: result.data.currently.precipType
        })
        */

    },

    getCoordinates: async (req, res, next) => {

        //https://api.opencagedata.com/geocode/v1/json?q=Gainesville%2C%20Florida&key=20e0b22d3e504d529a4bcb34edf99542&language=en&pretty=1

        let result = await axios.get('https://api.opencagedata.com/geocode/v1/json?q=' + req.query.city + '%2C%20' + req.query.state + '&key=' + openCageKey + '&language=en&pretty=1')

        req.latitude = result.data.results[0].geometry.lat;
        req.longitude = result.data.results[0].geometry.lng;

        next();
    }


}