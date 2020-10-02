const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const db = require('./db')
const movieRouter = require('./routes/movie-router')
const path = require('path')
const app = express()
// const apiPort = 
// process.env.apiPort ||
//  3000
// const PORT = process.env.PORT || 3001
// require('dotenv').config();
// const apiPort = process.env.PORT || 8000 


// mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//     console.log('Connected to db');
// })
// mongoose.connection.on('error', err => {
//     console.log('Mongoose connection Error :' + err);

// });

// if (process.env.NODE_ENV === 'production') {           
//     app.use(express.static('client/build'));
  
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
//   }



app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)

app.listen(process.env.PORT || 3000, () => console.log(`Server running on port `))


// app.listen(PORT, () => { console.log(`server is running on port ${PORT}`) }) 