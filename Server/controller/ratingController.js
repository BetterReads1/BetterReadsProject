const { nextTick } = require('process');
const db = require('../Models/sqldb');

const ratingController = {};

/*
* ==================================================
*   PREV: None
*   Adds rating to table
*   NEXT: None
* ==================================================
*/
ratingController.addRating = function(req, res, next) {
    //Getting various rating data from req.body
    const { bookid, userid, comments, plotline, unpredictability, pace, writingstyle, ending, overall, tags } = req.body;

    //Generating rating id
    const ratingid = helper_CreateRatingID();

    const ratingQuery = `INSERT INTO rating_table ( rating_id, book_id, user_id, comments, plotline, unpredictability, pace, writing_style, ending, overall_enjoyability, tags) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`
    const ratingParameters = [ratingid, bookid, userid, comments, plotline, unpredictability, pace, writingstyle, ending, overall, tags];
    

    db.query(ratingQuery, ratingParameters)
    .then((data) => {
        console.log('Data after addRating: ', data.rows); // TESTING
        next();
    }).catch((err) => {
        next({
            log: 'Error in middleware function: ratingController.addRating',
            message: {err: 'Could not add rating'}
        });
    });
}

/*
* ==================================================
*   PREV: None
*   Adds rating to table
*   NEXT: None
* ==================================================
*/
ratingController.getRatings = function(req, res, next) {
    const ratingQuery = `SELECT * FROM rating_table`

    db.query(ratingQuery)
    .then((data) => {
        console.log('Data after ratingQuery: ', data.rows); // TESTING
        res.locals.ratings = data.rows;
        next();
    }).catch((err) => {
        next({
            log: 'Error in middleware function: ratingController.getRatings',
            message: {err: 'Could not get ratings'}
        });
    });
}

const helper_CreateRatingID = function() {
    return 0;
}

module.exports = ratingController;