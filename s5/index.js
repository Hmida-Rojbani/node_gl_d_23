const express = require('express')
require('./db/connect')
const student_router = require('./routers/students')
const class_router = require('./routers/classrooms')
const user_router = require('./routers/users')
const auth = require('./middlewares/auth')
const app = express()
const port = 3000
app.use(express.json())
app.use('/api/students',student_router);
app.use('/api/classes',auth,class_router);
app.use('/api/users',user_router);


app.listen(port, () => console.log(`Student app listening on port ${port}!`))