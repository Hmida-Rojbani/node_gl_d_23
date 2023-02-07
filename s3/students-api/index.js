const express = require('express')
const student_router = require('./routers/students')
const welcome_router = require('./routers/welcome')
const morgan = require('morgan')
const appDebug = require('debug')('app:debug')
const appPort = require('debug')('app:port')
const config = require('config')
const app = express()
const port = 3000
app.use(express.json());
appDebug('Env :',app.get('env'));
appDebug('Env :',process.env.NODE_ENV);
appDebug('App Name :',config.get('app'))
appDebug('DB :',config.get('db'))
if(app.get('env')==='development')
    app.use(morgan('dev'))
// app.use(function (req,res,next) {
//     console.log('I passed from here');
//     req.data='GLSI'
//     res.data='-D'
//     next();
// })
app.use('/api/welcome',welcome_router);

app.use('/api/students',student_router);



app.listen(port, () => appPort(`Students api listening on port ${port}!`))