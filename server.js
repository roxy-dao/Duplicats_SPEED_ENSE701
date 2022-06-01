require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const connectDb = require('./database/db')
const app = express()
const MOCK_DB = 'mock-db'

const dbMode = process.env.DB_MODE || MOCK_DB
if (dbMode === MOCK_DB) {
  const { connectMockDb, populateMockDb } = require('./database/mockDb')
  connectMockDb()
  populateMockDb()
} else {
  connectDb()
}

app.use(cors())
app.use(express.json())

app.use('/api/articles', require('./routes/articles'))
app.use('/api/practices', require('./routes/practice'))

app.use(express.static(path.resolve(__dirname, './frontend/build')))
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'))
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))
