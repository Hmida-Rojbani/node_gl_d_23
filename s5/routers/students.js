const router = require('express').Router();
const  mongoose = require('mongoose');
const {Student} = require('../models/student')
const _ = require('lodash');
const { ClassRoom } = require('../models/classroom');
const auth = require('../middlewares/auth');
const autoris = require('../middlewares/autoris');
router.post('/',[auth,autoris], async (req, res) => {
    let student = new Student(req.body);
    let val_error = student.validateData(req.body);
    if(val_error)
        return res.status(400).send(val_error.message);
        let classRoom ;
    if(req.body.classId){
        classRoom = await ClassRoom.findById(req.body.classId);
    if(!classRoom)
        return res.status(400).send('Class ID provided is not found In DB');
    student.classRoom.id = classRoom._id;
    student.classRoom.name=classRoom.name;
    }
    try {
        student = await student.save();
        if(req.body.classId){
            classRoom.studentNumber++
            await classRoom.save()
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
    
    res.status(201).send(student);
})

router.get('/', async (req, res) => {
    let students =  await Student.find();
    res.status(200).send(students);
})

router.get('/id/:id', async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send('Wrong ObjectId')
    let student =  await Student.findById(req.params.id);
    if(!student)
        return res.status(404).send('Id not found')
    res.status(200).send(student);
})

router.put('/id/:id', async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send('Wrong ObjectId')
    let student =  await Student.findById(req.params.id);
    if(!student)
        return res.status(404).send('Id not found')
    student = _.merge(student,req.body);
    student = await student.save();
    res.status(200).send(student);
})

router.delete('/id/:id', async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send('Wrong ObjectId')
    let student =  await Student.findByIdAndDelete(req.params.id);
    if(!student)
        return res.status(404).send('Id not found')
    res.status(200).send(student);
})

router.get('/active/:active', async (req, res) => {
    let students =  await Student.find({active:req.params.active});
    res.status(200).send(students);
})
//$eq $neq $in $nin $gt $gte $lt $lte
router.get('/age/:min/:max', async (req, res) => {
    let students =  await Student.find({age : {$gte:req.params.min
                                                , $lt:req.params.max}});
    res.status(200).send(students);
})

module.exports=router