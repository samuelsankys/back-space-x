const { Router } = require('express')
const index = require('../controllers/launch/index')
const statsRocket = require('../controllers/launch/statsRocket')
const statsLaunches = require('../controllers/launch/statsLaunches')

const router = Router()

router.get('/', index)
router.get('/stats/rocket', statsRocket)
router.get('/stats/launch', statsLaunches)

module.exports = router
