const axios = require('axios')
const config = require('../config/config')

module.exports = {

    getWeather: async (req, res) => {

        // /key/lat/long/2018-10-24T19:06:32

        let result = await axios.get('https://api.darksky.net/forecast/' + config.darkSkyApiKey + '/42.3601,-71.0589,223420630')

        //console.log(result)

        res.send({
            latitude: result.data.latitude,
            longitude: result.data.longitude,
            summary: result.data.currently.summary,
            precipProbability: result.data.currently.precipProbability,
            weather: result.data.currently.precipType
        })

    }

}