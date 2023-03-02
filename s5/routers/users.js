const { userValid, User, userLoginValid } = require('../models/user');
const bcrypt = require('bcrypt')
const router = require('express').Router();

router.post('/register',async (req, res) =>{
    let error=userValid(req.body);
    if(error)
        return res.status(400).send(error.message)
    let user = new User(req.body);
    try {
        user.password = await bcrypt.hash(user.password,await bcrypt.genSalt(12))
        await user.save();
    } catch (error) {
        return res.status(400).send(error.message)
    }
    res.status(201).send(user);
})

router.get('/',async (req, res) =>{
    let users = await User.find().select('-password -isAdmin -__v');
    res.send(users)
})

router.post('/login',async (req, res) =>{
    let error=userLoginValid(req.body);
    if(error)
        return res.status(400).send(error.message)
    let user_login = req.body;
    let user = await User.findOne({email : user_login.username})
    if(!(user && await bcrypt.compare(user_login.password,user.password)  ))
        return res.status(400).send('Username or password are not correct')
    let token = 'Berear '+user.generateAuthToken()
    res.setHeader('Authorization',token).send('User logged in')
})

module.exports=router;