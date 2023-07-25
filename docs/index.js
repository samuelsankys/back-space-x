const basicInfo = require('./basicInfo')
const components = require('./components')
const paths = require('./paths')
const errors = require('./errors/index.js')

module.exports = {
  ...basicInfo,
  ...components,
  ...paths,
  ...errors,
}
