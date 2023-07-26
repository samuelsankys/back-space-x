const request = require('supertest')
const app = require('../src/app')

describe('Launch Stats EndPoint', () => {
  it('Shoud return list with status 200 and attributes', async () => {
    const response = await request(app).get('/launches/stats/launch')
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('years')
    expect(response.body).toHaveProperty('series')
  })
})
