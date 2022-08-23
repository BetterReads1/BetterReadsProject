const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// running a get request sending dist/index to server.
app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'))
  })

// All api requests will go through here
app.use('/api', (req, res) => {
    return res.status(200).json([]);
})

app.use((req, res) => {
    res.status(404).json("Page not found");
})

app.use((err, req, res, next) => {
    const defaultError = {
        log: "Error in unknown middleware",
        status: 500,
        message: {err: "Error sent in response"}
    }
    const errorObj = Object.assign(defaultError, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

module.exports = app;