const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('DB connected'))

const app = express()

const PORT = 3000

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`))