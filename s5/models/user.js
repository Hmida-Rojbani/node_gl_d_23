const mongoose = require('mongoose')
const Joi = require('joi')
const uniqueValidator = require('mongoose-unique-validator')
const jwt = require('jsonwebtoken')
let user_schema = new mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true, unique:true},
    password : {type:String, required:true},
    isAdmin : {type:Boolean, default:false},
    
});
user_schema.plugin(uniqueValidator)

const user_valid = Joi.object({
    name : Joi.string().min(4).required(),
    email : Joi.string().email().required(),
    password : Joi.string().regex(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})")).required(),
    isAdmin : Joi.boolean()
})

const user_login = Joi.object({
    username : Joi.string().email().required(),
    password : Joi.string().regex(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})")).required()
})
user_schema.methods.generateAuthToken = function () {
    return jwt.sign({_id :this._id,name : this.name, isAdmin: this.isAdmin},'secret',{expiresIn : '1h'})
}
let User = mongoose.model('User',user_schema)
 
module.exports.User=User
module.exports.userValid=(data)=>user_valid.validate(data).error 
module.exports.userLoginValid=(data)=>user_login.validate(data).error 