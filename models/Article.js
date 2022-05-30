const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: String,
  authors: String,
  source: String,
  pubyear: Number,
  doi: String,
  claim: String,
  evidence: String,
  sepractice: String,
  is_approved: {
    type: Boolean,
    default: false,
  },
})

const Article = mongoose.model('Article', articleSchema)
module.exports = Article
