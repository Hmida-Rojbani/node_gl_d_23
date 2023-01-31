const express = require('express')
const student_router = require('./routers/students')
const welcome_router = require('./routers/welcome')
const app = express()
const port = 3000

app.use('/api/students',student_router);
app.use('/welcome',welcome_router);

app.listen(port, () => console.log(`Students api listening on port ${port}!`))