const express = require('express')
const router = express.Router()
const Article = require('../models/Article')

router.get('/', (req, res) => {
  Article.find()
    .then((articles) => {
      res.json(articles)
    })
    .catch((err) => {
      res.json(err)
    })
})

router.post('/', (req, res) => {
  Article.create(req.body)
    .then((article) => {
      res.json(`Succesfully created article ${article}`)
    })
    .catch((err) => {
      res.json(`Unable to create a new article ${err}`)
    })
})

router.delete('/:_id', (req, res) => {
  Article.findByIdAndRemove(req.params._id)
    .then((article) => {
      res.json(`Succesfully deleted article ${article}`)
    })
    .catch((err) => {
      res.json(`Unable to delete article ${err}`)
    })
})

module.exports = router
