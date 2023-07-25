const apiSpace = require('../../helpers/apiSpaceX')
const formatDataApi = require('../../utils/prepareApiDateToLoadDB')
const formatRocketDataApi = require('../../utils/prepareApiRocketDateToLoadDB')
const launchRepo = require('../../repositories/launcheRepo')
const rocketRepo = require('../../repositories/rocketRepo')

module.exports = async () => {
  try {
    await firstSinc()
  } catch (error) {
    console.log(error)
  }
}

async function firstSinc() {
  const countR = await rocketRepo.count()
  if (!countR) {
    await syncRockets()
  }
  const count = await launchRepo.count()
  if (!count) {
    await syncLaunches()
  }
}

async function syncRockets() {
  const rockets = await apiSpace.get('/v4/rockets')
  const promises = []
  let count = 0
  for (const rocket of rockets) {
    count++
    const queryRockets = formatRocketDataApi(rocket, count)
    promises.push(rocketRepo.create(queryRockets))
  }
  await Promise.all(promises)
    .then(async (results) => {
      const count = await rocketRepo.count()
      console.log('Carregou ' + count + ' rockets dados.')
    })
    .catch((error) => {
      console.error('Error occurred:', error.message)
    })
}

async function syncLaunches() {
  const launches = await apiSpace.get('/v5/launches')
  const promises = []
  let count = 0
  for (const launch of launches) {
    count++
    const queryLaunches = formatDataApi(launch, count)
    promises.push(launchRepo.create(queryLaunches))
  }
  await Promise.all(promises)
    .then(async (results) => {
      const count = await launchRepo.count()
      console.log('Carregou ' + count + ' dados.')
    })
    .catch((error) => {
      console.error('Error occurred:', error.message)
    })
}
