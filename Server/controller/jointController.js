const { Console } = require('console');
const { existsSync } = require('fs');
const db = require('../Models/bbrModel');

const jointController = {};

/*
* ==================================================
*   PREV: None
*   Get all genres
*   Sets res.locals.genres
*   NEXT: getBooks
* ==================================================
*/
jointController.getGenres = (req, res, next) => {
    console.log('RECEIVED REQUEST BODY: ', req.body);

    const genreQuery = `SELECT * FROM genre_table`

    db.query(genreQuery)
    .then((data) => {
        const sendData = {};

        for(let i = 0; i < data.rows.length; i++) {
            const genre = data.rows[i];
            sendData[genre.genre_id] = genre.genre;
        }

        res.locals.genres = sendData;
        next();
    }).catch((err) => {
        next({
            log: 'Error in middleware function: jointController.getGenres',
            message: {err: 'Could not get genres!'}
        });
    });
}

/*
* ==================================================
*   PREV: getGenres
*   Get all books from table
*   Sets res.locals.books
*   NEXT: addBook
* ==================================================
*/
jointController.getBooks = (req, res, next) => {
    const bookQuery = `SELECT book_id, title, author FROM book_table`

    db.query(bookQuery)
    .then((data) => {
        console.log('CONFIRMED: Got books!');
        res.locals.books = data.rows;
        next();
    }).catch((err) => {
        next({
            log: 'Error in middleware function: jointController.getBooks',
            message: {err: 'Could not get books!'}
        });
    });
}

/*
* ==================================================
*   PREV: getBooks
*   Adds book to table
*   NEXT: addBook
* ==================================================
*/
jointController.checkGenre = (req, res, next) => {
    let genre_id = req.body[0].genre;

    if(!res.locals.genres[genre_id]) {
        console.log(genre_id + ' does not exist in: ', res.locals.genres);

        const genreNames = Object.values(res.locals.genres);
        
        if(genreNames.includes(genre_id)) {
            console.log(`Setting genre string ${genre_id} to ID of ${genreNames.indexOf(genre_id) + 1}`);
            res.locals.genre_id = genreNames.indexOf(genre_id) + 1;
            return next();
        }
        else {
            console.log('ok genre doesn\'t exist. trying to add now.');

            db.query('INSERT INTO genre_table ( genre_id, genre) VALUES ($1, $2) RETURNING *', [genreNames.length + 1, genre_id])
            .then((data) => {
                res.locals.genre_id = genreNames.length + 1;
                res.locals.newData = data.rows;
                db.query('SELECT * FROM genre_table')
                .then((d) => {
                    res.locals.newGenres = d.rows;
                    next();
                })
            })
            .catch((err) => {
                console.log(err);
                return next({
                    log: 'Error in middleware function: jointController.addBook',
                    message: {err: `Could not add genre: ${genre_id} to database.`}
                });
            })
        }
    }
    else {
        console.log('CONFIRMED: Genre exists!');
        res.locals.genre_id = genre_id;
        next();
    }     
}

/*
* ==================================================
*   PREV: checkGenre
*   Adds book to table
*   NEXT: addRating
* ==================================================
*/
jointController.addBook = (req, res, next) => {
    //Receive title and author from req.body
    const { title, author, pages, year, series, series_name, place_in_series } = req.body[0];
    let genre_id = res.locals.genre_id;

    console.log('We trynna add a book rn.');

    //Check if book already exists
    const uTitleInput = title.toLowerCase().replace(' ', '');
    const uAuthorInput = author.toLowerCase().replace(' ', '');
    for(let i = 0; i < res.locals.books.length; i++) {
        const book = res.locals.books[i];
        const uTitleCheck = book.title.toLowerCase().replace(' ', '');
        const uAuthorCheck = book.author.toLowerCase().replace(' ', '');
        
        //if it does, just take the book id and move along to the next bit
        if(uTitleInput === uTitleCheck && uAuthorInput === uAuthorCheck) {
            console.log(`==========BOOK ${uTitleInput} ALREADY EXISTS AS ${book.book_id}`);
            res.locals.book_id = book.book_id;
            res.locals.genre_id = genre_id;
            return next();
        }
    }
    console.log('CONFIRMED: Book doesn\'t exists! Adding it now!');

    
    //Book doesn't exist, which means we're making one!
    //Generate book id
    book_id = helper_CreateBookID();

    //Maybe we should check if genreId exists already first in the genre table

    //Book add query // !Front end should send genre id
    const bookQuery = `INSERT INTO book_table (book_id, title, author, pages, year, genre_id, series, series_name, place_in_series) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)` 
    const bookParameters = [book_id, title, author, pages, year, genre_id, series, series_name, place_in_series];

    //Adds book title and author to DB if it doesn't already exist
    db.query(bookQuery, bookParameters)
    .then((data) => {
        res.locals.book_id = book_id;
        res.locals.genre_id = genre_id;
        next();
    }).catch((err) => {
        console.log(err.message);
        next({
            log: 'Error in middleware function: jointController.addBook',
            message: {err: `Could not add book: ${title} to database.`}
        });
    });
}

/*
* ==================================================
*   PREV: addBook
*   Adds rating to table
*   NEXT: None
* ==================================================
*/
jointController.addRating = function(req, res, next) {
    console.log('STARTING ADD RATING!');

    //Getting various rating data from req.body
    const { user_id, comments, overall_enjoyability, tags } = req.body[1];
    const book_id = res.locals.book_id;
    const genre_id = res.locals.genre_id;

    //Splitting tags
    let tagString = '';
    if(tags) {
        for(let i = 0; i < tags.length; i++) {
            tagString += tags[i].replace(',', ' ');

            if(i !== tags.length - 1) {
                tagString += ',';
            }
        }
    }

    //Generating rating id
    const ratingid = helper_CreateRatingID();

    const ratingQuery = `INSERT INTO rating_table ( rating_id, book_id, user_id, genre_id, comments, overall_enjoyability, tags) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`
    const ratingParameters = [ratingid, book_id, user_id, genre_id, comments, overall_enjoyability, tagString];
    

    db.query(ratingQuery, ratingParameters)
    .then((data) => {
        const retData = data.rows[0];
        
        //Lets get that book again!
        retData.genre = res.locals.genres[retData.genre_id];
        retData.tags = retData.tags.split(',');

        db.query('SELECT * FROM book_table WHERE book_id=' + book_id)
        .then(bookdata => {
            if(bookdata.rows[0]) {
                retData.pages = bookdata.rows[0].pages;
                retData.year = bookdata.rows[0].year;
                retData.part_of_series = bookdata.rows[0].series;
                retData.series_name = bookdata.rows[0].series_name;
                retData.place_in_series = bookdata.rows[0].place_in_series;
                retData.overall_enjoyability = bookdata.rows[0].overall_enjoyability;
                retData.title = bookdata.rows[0].title;
                retData.author = bookdata.rows[0].author;
                res.locals.addedRating = retData;
                next();
            }
            else {
                console.log('BOOK DOESN\'T EXIST WITH AN ID OF: ' + book_id);
                next({
                    log: 'Error in middleware function: jointController.addRating',
                    message: {err: 'Could not add rating'}
                });
            }
        })
        .catch(err => {
            console.log(err.message);
            next({
                log: 'Error in middleware function: jointController.addRating',
                message: {err: 'Could not get book data after adding rating'}
            });
        })    
    }).catch((err) => {
        console.log(err.message);
        next({
            log: 'Error in middleware function: jointController.addRating',
            message: {err: 'Could not add rating'}
        });
    });
}

const helper_CreateBookID = function() {
    // const uniqueId = 
    return Number(Math.floor(Math.random() * 999).toString() + Math.floor(Math.random() * 999).toString());
}

const helper_CreateRatingID = function() {
    return Number(Math.floor(Math.random() * 999).toString() + Math.floor(Math.random() * 999).toString());
}

module.exports = jointController;