const launchRepo = require('../../repositories/launcheRepo')

module.exports = async (query) => {
  const { search } = query
  let { pageNumber, pageSize } = query

  pageSize = pageSize ? parseInt(pageSize) : 10
  pageNumber = pageNumber ? parseInt(pageNumber) : 1

  const where = search ? { search } : undefined
  const { results, count } = await launchRepo.findMany(where, pageSize, pageNumber)
  const totalDocs = count
  const totalPages = Math.ceil(totalDocs / pageSize)
  const response = {
    hasPrev: pageNumber > 1 && pageNumber <= totalPages + 1,
    hasNext: pageNumber < totalPages,
    totalPages: totalPages,
    page: pageNumber,
    totalDocs,
    results,
  }
  return response
}
