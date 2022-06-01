const mongoose = require('mongoose')

const practiceSchema = new mongoose.Schema({
  sepractice: String,
})

const Practice = mongoose.model('Practice', practiceSchema)
module.exports = Practice
