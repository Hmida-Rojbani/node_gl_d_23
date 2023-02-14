const mongoose = require('mongoose')

let student_schema = new mongoose.Schema({
    name : String,
    inscriptionDate : {
        type : Date,
        default: Date.now()
    },
    age : Number,
    active : Boolean,
    paymentAmount : Number
});

let Student = mongoose.model('Student',student_schema);
module.exports.Student = Student