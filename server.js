require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const connectDb = require('./database/db')
const app = express()

connectDb()

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
