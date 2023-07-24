const { ok, serverError } = require('../../helpers/http')
const indexLaunchService = require('../../services/launches/indexService')

module.exports = async (req, res) => {
  try {
    const query = req.query
    const response = await indexLaunchService(query)
    return ok(res, response)
  } catch (error) {
    return serverError(res, error)
  }
}
