const express = require('express');
const path = require('path');

const reviewsRouter = require('./routes/reviewsRouter')

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/reviews', reviewsRouter); 

// send index.html file to base endpoint
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})



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

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});


module.exports = app;