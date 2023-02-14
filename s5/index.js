const express = require('express')
require('./db/connect')
const app = express()
const port = 3000
app.use(express.json())

app.listen(port, () => console.log(`Student app listening on port ${port}!`))