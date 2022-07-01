const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors')

/* 
* ===================================================================
*   Middleware Controllers
* ===================================================================
*/
const ratingController = require('./controller/ratingController');
const bookController = require('./controller/bookController');
const genreController = require('./controller/genreController');
const jc = require('./controller/jointController');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../dist')));

/* GET Request on 'localhost:3000/'
* ==================================================
*   Default Request
* ==================================================
*/
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../src/index.html')));


/* GET Request on 'localhost:3000/books'
* ==================================================
*   Middleware: bookController.getBooks 
* ==================================================
*/
app.get('/books', bookController.getBooks, (req, res) => {
    res.status(200).json(res.locals.books);
})

/* GET Request on 'localhost:3000/genre'
* ==================================================
*   Middleware: genreController.getGenres 
* ==================================================
*/
app.get('/genre', genreController.getGenres, (req, res) => {
    res.header('Access-Control-Allow-Origin', '*'); //! NEEDED to avoid CORS violations
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.status(200).json(res.locals.genres);
})

/* POST Request on 'localhost:3000/addBook'
* ==================================================
*   Middleware: bookController.addBook 
*   Expecting req.body from client
* ==================================================
*/
app.post('/addBook', bookController.addBook, (req, res) => {
    res.status(200).json(res.locals.books);
})

/* GET Request on 'localhost:3000/ratings'
* ==================================================
*   Middleware: ratingController.getRatings
* ==================================================
*/
app.get('/ratings', genreController.getGenres, bookController.getBooks, ratingController.getUsers, ratingController.getRatings, (req, res) => {
    res.status(200).json(res.locals.ratings);
})

/* GET Request on 'localhost:3000/ratings'
* ==================================================
*   Middleware: ratingController.getRatingSpecific
* ==================================================
*/
app.get('/ratings/:id', genreController.getGenres, ratingController.getRatingSpecific, (req, res) => {
    res.status(200).json(res.locals.rating);
})

/* POST Request on 'localhost:3000/addRating'
* ==================================================
*   Middleware: ratingController.addRating
*   Expecting req.body from client
* ==================================================
*/
app.post('/addRating', ratingController.addRating, (req, res) => {
    res.status(200).send('Successfully added rating!');
})

/* POST Request on 'localhost:3000/newRating'
* ==================================================
*   Middleware: jointController, various
*   Expecting req.body from client formatted like: 
*   [
*       {
*           "title": "The Apple Story",
*           "author": "Ian Grepo",
*           "pages": 445,
*           "year": "2018",
*           "genre_id": 1,
*           "series": false,
*           "series_name": "",
*           "place_in_series": 0
*       },

*       {
*           "user_id": 0,
*           "comments": "What?",
*           "overall_enjoyability": 1,
*           "tags": ["stupid", "dumb"]
*        }
*   ]
* ==================================================
*/
app.post('/newRating', jc.getGenres, jc.getBooks, jc.checkGenre, jc.addBook, ratingController.getUsers, jc.addRating, (req, res) => {
    res.status(200).json(res.locals.addedRating);
})

app.post('/addGenre', jc.getGenres, jc.checkGenre, (req, res) => {
    console.log(`Added ${res.locals.newData} to genres table`);
    res.status(200).json(res.locals.newGenres);
})

/*
*   404 error handler
*/
app.use((req, res) => {
    res.status(404).json("Page not found");
})

/*
*   Global Error Handler 
*/
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

/*
*   Listening to port
*/
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

module.exports = app;