const express = require('express')
const router = express.Router();
const student_valid = require('../models/student');

let students = [
    {id:1, name: 'Student 1', class : 'Class A'},
    {id:2, name: 'Student 2', class : 'Class B'},
    {id:3, name: 'Student 3', class : 'Class B'},
    {id:4, name: 'Student 4', class : 'Class A'}
]

router.get('',(req,res)=>{
    res.send(students);
})

router.get('/:stdId',(req,res)=>{
    let student = student_valid.seek_student(students,req.params.stdId,res);
    res.send(student);
})


router.post('', (req, res) => {
    student_valid.student_post_validation(req.body,res);
    let student = {
        id : students.length + 1,
        name : req.body.name,
        class : req.body.class
    };
    students.push(student);
    res.status(201).send(student);
});



router.put('/:stdId',(req,res)=>{
    student_valid.student_update_validation(req.body,res);
    let student = student_valid.seek_student(students,req.params.stdId,res);
    // update student
    if(req.body.name)
        student.name = req.body.name;
    if(req.body.class)
        student.class = req.body.class;
    res.status(202).send(student);
})

router.delete('/:stdId',(req,res)=>{
    let student = student_valid.seek_student(students,req.params.stdId,res);
    students = students.filter(std=>std.id !== parseInt(req.params.stdId));
    res.status(202).send(student);
})

module.exports = router;