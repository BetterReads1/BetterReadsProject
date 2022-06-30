const db = require('../Models/bbrModel');

const genreController = {};

/*
* ==================================================
*   PREV: None
*   Get all books from table
*   Sets res.locals.books
*   NEXT: None/filterBooks (Optional)
* ==================================================
*/
genreController.getGenres = (req, res, next) => {
    const bookQuery = `SELECT * FROM genre_table`

    db.query(bookQuery)
    .then((data) => {
        const sendData = [];

        for(let i = 0; i < data.rows.length; i++) {
            const genre = data.rows[i];
            sendData.push(genre.genre);
        }

        res.locals.genres = sendData;
        next();
    }).catch((err) => {
        next({
            log: 'Error in middleware function: genreController.getGenres',
            message: {err: 'Could not get genres!'}
        });
    });
}

module.exports = genreController;