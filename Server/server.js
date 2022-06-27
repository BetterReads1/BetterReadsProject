const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
// const goodReadsController = require("../Server/Controller/goodReadsController");
const path = require('path');

app.use(cors());
app.use(express.json());

// send index.html file to base endpoint
// app.use(express.static(path.resolve(__dirname, '../dist')));

// app.get('/',  goodReadsController.createPost, (req, res) => {
//     res.status(200).send(res.locals.test);
// })

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
    console.log(errObj.log);
    return res.staus(errorObj.status).json(errorObj.message)
})

module.exports = app;