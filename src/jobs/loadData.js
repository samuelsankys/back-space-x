const cron = require('node-cron')
const apiSpace = require('../helpers/apiSpaceX')
const formatDataApi = require('../utils/prepareApiDateToLoadDB')
const formatRocketDataApi = require('../utils/prepareApiRocketDateToLoadDB')
const launchRepo = require('../repositories/launcheRepo')
const rocketRepo = require('../repositories/rocketRepo')

async function addNewLaunch() {
  try {
    await loadRocket()
    await loadLaunches()
  } catch (error) {
    console.log(error)
  }
}

async function loadRocket() {
  let rockets = await apiSpace.get('/v4/rockets')
  const maxData = await rocketRepo.maxSequence()
  let countSequence = maxData
  for (let i = maxData; i < rockets.length; i++) {
    const rocketApi = rockets[i]
    const rocket = await rocketRepo.findById(rocketApi.id)
    if (!rocket) {
      countSequence++
      const queryRockets = formatRocketDataApi(rocketApi, countSequence)
      await rocketRepo.create(queryRockets)
    }
  }
}

async function loadLaunches() {
  let launches = await apiSpace.get('/v5/launches')
  const maxData = await launchRepo.maxSequence()
  let countSequence = maxData
  for (let i = maxData; i < launches.length; i++) {
    const launchApi = launches[i]
    const launch = await launchRepo.findById(launchApi.id)
    if (!launch) {
      countSequence++
      const queryLaunches = formatDataApi(launchApi, countSequence)
      await launchRepo.create(queryLaunches)
    }
  }
}

module.exports = cron.schedule('00 09 * * *', addNewLaunch)
