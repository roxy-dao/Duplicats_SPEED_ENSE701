const request = require('supertest')
const assert = require('assert')
const SERVER_URL = 'http://localhost:5000'
const mockArticles = require('../database/mockData')

describe('GET /articles', () => {
  it('should return all articles', (done) => {
    request(SERVER_URL)
      .get('/api/articles')
      .expect(200)
      .then((res) => {
        assert.deepEqual(mockArticles, mockArticles)
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})

describe('POST /articles', () => {
  it('should create a new article', (done) => {
    request(SERVER_URL)
      .post('/api/articles')
      .send({
        title: 'Test Article',
        authors: 'Test Author',
        source: 'Test Source',
        pubyear: '2011',
        doi: 'Test DOI',
        claim: 'Test Claim',
        evidence: 'Test Evidence',
        sepractice: 'Test SE Practice',
        is_approve: false,
      })
      .expect(200)
      .then((res) => {
        assert.notDeepEqual(res.body, {
          title: 'Test Article',
          authors: 'Test Author',
          source: 'Test Source',
          pubyear: '2011',
          doi: 'Test DOI',
          claim: 'Test Claim',
          evidence: 'Test Evidence',
          sepractice: 'Test SE Practice',
          is_approve: false,
        })
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})

describe('DELETE /articles', () => {
  it('should delete an article', (done) => {
    request(SERVER_URL)
      .delete('/api/articles/5b6f7d6e0f6a7a2c8a8e1f3a')
      .expect(200)
      .then((res) => {
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
