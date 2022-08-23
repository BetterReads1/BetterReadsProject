const express = require('express')

const router = express.Router()

const queryController = require('../Controller/queryMiddleware');

const { addToBook_Table, getBook_Id, addToPost_Table, getPost_Id, addToHash_Table } = queryController;

router.post('/', addToBook_Table, getBook_Id, addToPost_Table, getPost_Id, addToHash_Table, (req, res) => {
    res.status(200).json(res.locals)
})

module.exports = router;


