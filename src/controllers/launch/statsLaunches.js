const { ok, serverError } = require('../../helpers/http')
const statsLaunchesLaunchService = require('../../services/launches/statsLaunchesService')

module.exports = async (req, res) => {
  try {
    const response = await statsLaunchesLaunchService()
    return ok(res, response)
  } catch (error) {
    return serverError(res, error)
  }
}
