const cron = require('node-cron')
const apiSpace = require('../helpers/apiSpaceX')
const formatDataApi = require('../utils/prepareApiDateToLoadDB')
const launchRepo = require('../repositories/launcheRepo')

async function addNewLaunch() {
  try {
    let launches = await apiSpace.get('/launches')
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
  } catch (error) {
    console.log(error)
  }
}

module.exports = cron.schedule('00 17 * * *', addNewLaunch)
