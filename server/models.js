const mongoose = require("mongoose");

const CleanSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    skill: {
        type: Array,
        default: []
    }
},{timestamps: true});

mongoose.connect('mongodb://localhost:27017/cleaner', {useNewUrlParser:true}, (errs)=>console.log("Db error -- ", errs));

const Clean = mongoose.model('Clean', CleanSchema);

module.exports = Clean;
