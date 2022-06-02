const { MongoMemoryServer } = require('mongodb-memory-server')
const { default: mongoose } = require('mongoose')
const Practice = require('../models/Practice')
const Article = require('../models/Article')

module.exports.connectMockDb = async () => {
  const mongod = await MongoMemoryServer.create()
  const uri = mongod.getUri()
  await mongoose.connect(uri, { dbName: 'mockDb' })
}

module.exports.populateMockDb = async () => {
  try {
    const { mockArticles, mockPractices } = require('../database/mockData')
    Practice.insertMany(mockPractices)
    Article.insertMany(mockArticles)
  } catch (err) {
    console.error(err)
  }
}
