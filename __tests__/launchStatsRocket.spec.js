const request = require('supertest')
const app = require('../src/app')

describe('Launch Rocket EndPoint', () => {
  it('Shoud return list with status 200 and attributes', async () => {
    const response = await request(app).get('/launches/stats/rocket')
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('success')
    expect(response.body).toHaveProperty('failed')
    expect(response.body).toHaveProperty('launches')
  })
})
