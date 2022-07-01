const db = require('../Models/bbrModel');

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

        const ratings = data.rows;
        const books = res.locals.books;
        const retArray = [];
        for(let i = 0; i < ratings.length; i++) {
            const r = ratings[i];
            const retData = {...r};
            console.log('===============trying to get ' + retData.genre_id + ' from ', res.locals.genres);
            retData.genre = res.locals.genres[retData.genre_id];
            retData.tags = retData.tags.split(',');

            if(books[r.book_id]) {
                retData.pages = books[r.book_id].pages;
                retData.year = books[r.book_id].year;
                retData.part_of_series = books[r.book_id].series;
                retData.series_name = books[r.book_id].series_name;
                retData.place_in_series = books[r.book_id].place_in_series;
                retData.title = books[r.book_id].title;
                retData.author = books[r.book_id].author;
            }
            
            retArray.push(retData);
        }
        res.locals.ratings = retArray;
        next();
    }).catch((err) => {
        next({
            log: 'Error in middleware function: ratingController.getRatings',
            message: {err: 'Could not get ratings'}
        });
    });
}

/*
* ==================================================
*   PREV: None
*   Get specific rating from table based on ID
*   NEXT: None
* ==================================================
*/
ratingController.getRatingSpecific = function(req, res, next) {
    const ratingId = req.params.id;
    const ratingQuery = `SELECT * FROM rating_table WHERE rating_id=${ratingId}`

    db.query(ratingQuery)
    .then((data) => {
        if(data.rows.length === 0) {
            console.log(`${ratingId} does not exist!`);
            next({
                log: 'Error in middleware function: ratingController.getRatingSpecific',
                message: {err: `${ratingId} does not exist!`}
            });
        }
        else {
            const retData = data.rows[0];

            retData.genre = res.locals.genres[retData.genre_id - 1];
            retData.tags = retData.tags.split(',');

            res.locals.rating = retData;
            next();
        }  
    }).catch((err) => {
        next({
            log: 'Error in middleware function: ratingController.getRatingSpecific',
            message: {err: 'Error getting rating'}
        });
    });
}

const helper_CreateRatingID = function() {
    return Number(Math.floor(Math.random() * 999).toString() + Math.floor(Math.random() * 999).toString());
}

module.exports = ratingController;