const express = require('express')
const app = express()
const dotenv =  require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./db')
app.use(express.json())
var cors = require('cors')

app.use(cors())

connectDB()
app.use('/api/cars/' , require('./routes/carRoute'))
app.use('/api/users/' , require('./routes/userRoute'))
app.use('/api/bookings/' , require('./routes/bookingRoute'))
app.get('/', (req, res) => res.send('HEllo Dev'))

app.listen(port, ()=> console.log(`Node server has started on port ${port} `))