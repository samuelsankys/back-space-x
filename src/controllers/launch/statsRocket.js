const { ok, serverError } = require('../../helpers/http')
const statsRocketLaunchService = require('../../services/launches/statsRocketService')

module.exports = async (req, res) => {
  try {
    const response = await statsRocketLaunchService()
    return ok(res, response)
  } catch (error) {
    return serverError(res, error)
  }
}
