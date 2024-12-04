const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()

app.use(cors()); 

mongoose.connect('mongodb://localhost:27017/userrrr')
.then(db => console.log('DB is connected'))
.catch(err => console.log(err))

app.set('port', process.env.PORT || 9192)

app.use(morgan('dev'))
app.use(express.json())

app.use(require('./routes/task'))
app.use(require('./routes/proRoutes'))

app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'))
})      