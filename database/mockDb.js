const { MongoMemoryServer } = require('mongodb-memory-server')
const { default: mongoose } = require('mongoose')

module.exports.connectMockDb = async () => {
  const mongod = await MongoMemoryServer.create()
  const uri = mongod.getUri()
  await mongoose.connect(uri, { dbName: 'mockDb' })
}
