const request = require('supertest')
const app = require('../src/app')

describe('Launch EndPoint', () => {
  it('Shoud return list launch and status 200 and first page', async () => {
    const response = await request(app).get('/launches')
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      hasNext: true,
      hasPrev: false,
    })
  })

  it('Shoud return list launch and first page', async () => {
    const response = await request(app).get('/launches?pageNumber=10')
    expect(response.body).toMatchObject({
      page: 10,
    })
  })

  it('Shoud return list launch and page with 30 items', async () => {
    const response = await request(app).get('/launches?pageSize=3')
    expect(response.body.results).toHaveLength(3)
  })

  it('Shoud return empty list when not found search', async () => {
    const response = await request(app).get('/launches?search=any_search_not_exists')
    expect(response.body.results).toHaveLength(0)
  })
})
