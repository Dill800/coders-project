
const AccidentDataEntry = require('../database/AccidentDataSchema.js')
//const signToken = require('../authFuncts').signToken;

module.exports = {

    get: async (req, res) => {
        // find all accidents on given date
        AccidentDataEntry.find({date: req.query.date}, (err, accidents) => {
            if(err){
                console.log(err)
                res.send({success: 0, message: 'Error while querying accident data.'});
            }
            if(accidents){
                res.send({success: 1, data: accidents});
            }
        })
    },

    getDistinctCities: async (req, res) => {

        let result = await AccidentDataEntry.aggregate(
            [
                {"$group": {"_id": {city: "$city", state: "$state"}}}
            ]
        )
        
        // get rid of _id field
        let list = [];
        result.map((value, ind) => {
            list.push({city: value._id.city, state: value._id.state})
        }) 

        res.send({success: 1, data: list})

    },

    getAll: async (req, res) => {
        // find all accidents on given date
        AccidentDataEntry.find({}, (err, accidents) => {
            if(err){
                console.log(err)
                res.send({success: 0, message: 'Error while querying accident data.'});
            }
            if(accidents){
                res.send({success: 1, data: accidents});
            }
        })
    },

    getCounts: async (req, res, next) => {

        AccidentDataEntry.find({date: req.query.date, city: req.query.city}, (err, accidents) => {
            if(err){
                res.send({success: 0, message: 'Error while querying accident data.'});
            }
            if(accidents){
                // sum up all the accidents
                let accident_counts = accidents.map(acc_entry => acc_entry.accidents);
                let accident_count = accident_counts.reduce((a, b) => a + b, 0);
                req.accidents = accident_count
                //res.send({success: 1, date: req.query.date, city: req.query.city, accidents: accident_count});
            }

            next();
        })

    },

    create: async (req, res) => {
        console.log("Creating accident data entry...")
        AccidentDataEntry.create(req.body, (err, entry) => {

            if(err){
                console.log(err)
                res.send({success: 0, message: 'Error while creating data entry...'})
            }
            if(entry){
                res.send({success: 1, message: 'Data entry created', createdData: entry})
            }
        });
    }

}