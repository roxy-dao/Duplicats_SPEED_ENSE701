const express = require('express')
const router = express.Router()
const Practice = require('../models/Practice')

router.get('/', (req, res) => {
  Practice.find()
    .then((practices) => res.json(practices))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.post('/', (req, res) => {
  Practice.create(req.body)
    .then((practice) => res.json(practice))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
