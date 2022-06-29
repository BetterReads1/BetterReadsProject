const express = require('express')

const booksController = require('../controller/booksController.js')
const reviewsController = require('../controller/reviewsController.js')

const router = express.Router()

router.get("/", reviewsController.getReviews, (req, res) => {
  res.status(200).json(res.locals.reviews)
})

router.post("/", booksController.getBookId, reviewsController.postReviews, (req, res) => {
  res.status(200).json(res.locals.postedReviews)
})

module.exports = router