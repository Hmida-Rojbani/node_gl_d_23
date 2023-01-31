const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/name/:nom', (req, res) => res.send(`Hello ${req.params.nom}!`))
app.get('/name/:nom/:prenom', (req, res) => res.send(`Hello ${JSON.stringify(req.params)}!`))
app.use(express.json())
app.post('/', (req, res) => res.send('Hello World by post!'))
app.put('/', (req, res) => res.send('Hello World by put!')) 
app.delete('/', (req, res) => res.send('Hello World by delete!'))
app.post('/name', (req, res) => res.send(`Hello ${req.body.nom}!`))

app.listen(port, () => console.log(`first example app listening on port ${port}!`))