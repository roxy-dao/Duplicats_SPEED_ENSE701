const request = require('supertest')
const assert = require('assert')
const SERVER_URL = 'http://localhost:5000'
const mockPractices = require('../database/mockData')

describe('GET /practices', () => {
  it('should return all practices', (done) => {
    request(SERVER_URL)
      .get('/api/practices')
      .expect(200)
      .then((res) => {
        assert.deepEqual(mockPractices, mockPractices)
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})

describe('POST /practices', () => {
  it('should create a new practice', (done) => {
    request(SERVER_URL)
      .post('/api/practices')
      .send({
        sepractice: 'DBB',
      })
      .expect(200)
      .then((res) => {
        assert.notDeepEqual(res.body, {
          sepractice: 'DBB',
        })
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
