const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('../../docs/index')
const launch = require('../routes/launch')
const index = require('../controllers')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send('All is fine...)')
  })
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
  app.use('/launches', launch)
  app.get('/', index)
}
