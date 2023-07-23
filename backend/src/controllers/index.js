const { ok, serverError } = require('../helpers/http')
const indexService = require('../services/index')

module.exports = async (req, res) => {
  try {
    const response = await indexService()
    return ok(res, response)
  } catch (error) {
    return serverError(res, error)
  }
}
