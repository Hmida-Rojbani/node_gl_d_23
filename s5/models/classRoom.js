const mongoose = require('mongoose')

let class_schema = new mongoose.Schema({
    name : String,
    studentNumber :  {
        type: Number,
        default:0
    },
    modules : [String]
});

let ClassRoom = mongoose.model('ClassRoom',class_schema)
 
module.exports.ClassRoom=ClassRoom