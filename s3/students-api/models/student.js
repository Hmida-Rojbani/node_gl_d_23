const Joi = require('joi');

let student_schema = Joi.object({
    id : Joi.number().integer().positive(),
    name : Joi.string().min(5).max(50).required(),
    class : Joi.string().alphanum().min(3).max(10).required()
});

let student_update_schema = Joi.object({
    id : Joi.number().integer().positive(),
    name : Joi.string().min(5).max(50),
    class : Joi.string().alphanum().min(3).max(10)
});

function student_post_validation(obj,res) {
    let valid_res = student_schema.validate(obj);
    if(valid_res.error)
        return res.status(400).send(valid_res.error.message);
}

function student_update_validation(obj,res) {
    let valid_res = student_update_schema.validate(obj);
    if(valid_res.error)
        return res.status(400).send(valid_res.error.message);
}

function seek_student(students,id,res) {
    let student = students.find(std=>std.id === parseInt(id));
    if(!student)
        return res.status(404).send('Student with the given id not found.');
    return student;
}
module.exports.student_post_validation =student_post_validation;
module.exports.student_update_validation=student_update_validation;
module.exports.seek_student =seek_student;