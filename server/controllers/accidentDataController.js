const AccidentDataEntry = require('../database/AccidentDataSchema.js')
//const signToken = require('../authFuncts').signToken;

module.exports = {

    get: async (req, res) => {
        // find all accidents on given date
        AccidentDataEntry.find({date: new Date(req.body.date)}, (err, accidents) => {
            if(err){
                res.send({success: 0, message: 'Error while querying accident data.'});
            }
            if(accident){
                res.send({success: 1, data: accident});
            }
        })
    },

    getCountOnDate: async (req, res) => {
        res.send({message: 'not implemented...'})
    },

    create: async (req, res) => {
        console.log("Creating accident data entry...")

        try {
            AccidentDataEntry.create(req.body);
            res.send({success: 1, message: "Data entry created"})
        }
        catch (err) {
            console.log(err)
            res.send({success: 0 , message: "Error during data entry creation..."})
        }
    },
}