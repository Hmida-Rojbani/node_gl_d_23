const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const uniqueValidator = require('mongoose-unique-validator')
let student_schema = new mongoose.Schema({
    name : {
        type:String,
        minLength:3,
        maxLength:50,
        required:true
    },
    inscriptionDate : {
        type : Date,
        default: Date.now()
    },
    age : {
        type:Number,
        min:18,
        required:true,
    },
    active : Boolean,
    paymentAmount : {
        type:Number,
        required:function () {
            return this.active
        }
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    classRoom : {
        id : {
            type : mongoose.Types.ObjectId,
            ref:'ClassRoom'
        },
        name : String
    }
});
student_schema.plugin(uniqueValidator)
let validation_schema = Joi.object({
    name : Joi.string().min(3).max(50).required(),
    inscriptionDate : Joi.date().iso(),
    age:Joi.number().integer().min(18).required(),
    active : Joi.boolean(),
    paymentAmount : Joi.number().positive(),
    email: Joi.string().email().required(),
    classId : Joi.objectId()
})//.with('active','paymentAmount');

student_schema.methods.validateData = function (data) {
    return validation_schema.validate(data).error;
}

let Student = mongoose.model('Student',student_schema);
module.exports.Student = Student