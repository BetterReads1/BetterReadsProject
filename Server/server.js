const express = require('express');
const app = express();
const port = 3000;


app.post('/', (req, res) => {
    res.status(200).json("WOO, IT ConnecteD!")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

module.exports = app;