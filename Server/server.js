const express = require('express');
const app = express();
const port = 3000;


app.get('/',  (req, res) => {
    res.status(200).send("WOO, IT ConnecteD!")
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
    console.log(errObj.log);
    return res.staus(errorObj.status).json(errorObj.message)
})

module.exports = app;