const apiSpace = require('../../helpers/apiSpaceX')
const formatDataApi = require('../../utils/prepareApiDateToLoadDB')
const launchRepo = require('../../repositories/launcheRepo')

module.exports = async () => {
  try {
    firstSinc()
  } catch (error) {
    console.log(error)
  }
}

async function firstSinc() {
  const count = await launchRepo.count()
  if (!count) {
    syncLaunches()
  }
}

async function syncLaunches() {
  const launches = await apiSpace.get('/launches')
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
