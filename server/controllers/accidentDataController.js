const AccidentDataEntry = require('../database/AccidentDataSchema.js')
//const signToken = require('../authFuncts').signToken;

module.exports = {

    get: async (req, res) => {
        // find all accidents on given date
        AccidentDataEntry.find({date: new Date(req.body.date)}, (err, accidents) => {
            if(err){
                res.send({success: 0, message: 'Error while querying accident data.'});
            }
            if(accidents){
                res.send({success: 1, data: accidents});
            }
        })
    },

    getCountOnDate: async (req, res) => {
        AccidentDataEntry.find({date: new Date(req.body.date)}, (err, accidents) => {
            if(err){
                res.send({success: 0, message: 'Error while querying accident data.'});
            }
            if(accidents){
                // sum up all the accidents
                let accident_counts = accidents.map(acc_entry => acc_entry.accidents);
                let accident_count = accident_counts.reduce((a, b) => a + b, 0);
                res.send({success: 1, data: accident_count});
            }
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
    },
}