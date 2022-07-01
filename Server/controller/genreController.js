const db = require('../Models/bbrModel');

const genreController = {};

/*
* ==================================================
*   PREV: None
*   Get all genres from table
*   Sets res.locals.genre
*   NEXT: None
* ==================================================
*/
genreController.getGenres = (req, res, next) => {
    const genreQuery = `SELECT * FROM genre_table`

    db.query(genreQuery)
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

/*
* ==================================================
*   PREV: None
*   Adds genre to the genre list
*   NEXT: None
* ==================================================
*/
genreController.getGenres = (req, res, next) => {
    const genreQuery = `SELECT * FROM genre_table`

    db.query(genreQuery)
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