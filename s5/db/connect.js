const mongoose = require('mongoose');
//url local = mongodb://localhost:27017/db
mongoose.connect('mongodb+srv://user:1234@db.mhbax.mongodb.net/gl-d-23?retryWrites=true&w=majority')
.then(()=>console.log('MongoDb is connected'))
.catch(err => console.error('Mongo not connected, Error : ',err.message ))