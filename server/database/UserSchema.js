import mongoose from 'mongoose'

const collectionName = 'users'
const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    passwordHash : {type: String, required: true},
    accessLevel : {type: mongoose.Number, required: true}
});

export default mongoose.model(collectionName, userSchema);