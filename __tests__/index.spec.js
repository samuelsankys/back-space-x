const request = require('supertest')
const app = require('../src/app')

describe('Index EndPoint', () => {
  it("Shoud return message 'Fullstack Challenge 🏅 - Space X API'", async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Fullstack Challenge 🏅 - Space X API')
  })
})
