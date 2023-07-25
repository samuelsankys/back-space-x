require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
})

const job = require('./jobs/loadData')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./routes/index')(app)
require('./services/launches/firstLoadData')()
job.start()

module.exports = app
