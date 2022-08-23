const express = require('express')

const router = express.Router()

const queryController = require('../Controller/queryMiddleware');

const { addToBook_Table } = queryController;

router.get('/', (req, res) => {
    res.status(200).json(["/ get "])
})

module.exports = router;


