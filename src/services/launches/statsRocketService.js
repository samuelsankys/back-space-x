const launchRepo = require('../../repositories/launcheRepo')
const rocketRepo = require('../../repositories/rocketRepo')

module.exports = async () => {
  const success = await launchRepo.count({ success: true })
  const failed = await launchRepo.count({ success: false })

  let rocketsSuccess = await rocketRepo.countSuccess(true)
  let rocketsFailed = await rocketRepo.countSuccess(false)

  const launches = rocketsSuccess.map((item) => {
    const failedItems = rocketsFailed.find((failedItem) => failedItem.name === item.name)

    return {
      name: item.name,
      success: item._count.launches,
      failed: failedItems ? failedItems._count.launches : 0,
      total: +failedItems._count.launches + item._count.launches,
    }
  })
  return { success, failed, launches }
}
