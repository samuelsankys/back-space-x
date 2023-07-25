const launch = require('../routes/launch')
const index = require('../controllers')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send('All is fine...)')
  })
  app.use('/launches', launch)
  app.get('/', index)
}
