const _index = require('./_index')
const statsRocket = require('./statsRocket')
const statsLaunch = require('./statsLaunch')

module.exports = {
  '/launches': {
    ..._index,
  },
  '/launches/stats/rocket': {
    ...statsRocket,
  },
  '/launches/stats/launch': {
    ...statsLaunch,
  },
}
