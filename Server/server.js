const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 3000;

const betterReadsController = require("./Controller/betterReadsController");
const queryMiddleware = require('./Controller/queryMiddleware.js')

const {addToBook_Table, getBook_Id, addToPost_Table, getPost_Id, addToHash_Table, addToRating_Table, addToPost_Hash_Join} = queryMiddleware;
const {threePost_Table, threeRatings_Table, threeBook_Table} = betterReadsController;

app.use(cors());
app.use(express.json());

// send index.html file to base endpoint
// app.use(express.static(path.resolve(__dirname, '../dist')));

app.post('/', addToBook_Table, getBook_Id, addToPost_Table, getPost_Id, addToRating_Table, addToHash_Table, addToPost_Hash_Join, (req, res) => {
    res.status(200).json(res.locals.post_id);
})

app.get('/', threePost_Table, (req, res) => {
    res.status(200).json(res.locals.posts);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

app.use((req, res) => {
    res.status(404).json("Page not found");
})

app.use((err, req, res, next) => {
    const defaultError = {
        log: "Error in unknown middleware",
        status: 400,
        message: {err: "Error sent in response"}
    }
    const errorObj = Object.assign(defaultError, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message)
})

module.exports = app;