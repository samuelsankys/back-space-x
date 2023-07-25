const packageJson = require('../package.json')
module.exports = {
  openapi: '3.1.0',
  info: {
    version: packageJson.version,
    title: 'API - Space-X',
    description: 'API Restful para a api Space-x',
    contact: {
      name: 'samuel_sankys@hotmail.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3563/',
      description: 'Local Server',
    },
  ],
  tags: [
    {
      name: 'Lançamentos',
      description: 'Responsável pelas informações de lançamentos de foguetes.',
    },
  ],
}
