const _index = require('./_index')
const launch = require('./launch')

module.exports = {
  components: {
    schemas: {
      ..._index,
      ...launch,

      Error: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
          },
          error: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
  },
}
