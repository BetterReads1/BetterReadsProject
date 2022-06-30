const db = require('../Models/bbrModel');

const bookController = {};

/*
* ==================================================
*   PREV: None
*   Adds book to table
*   NEXT: None
* ==================================================
*/
bookController.addBook = (req, res, next) => {
    //Receive title and author from req.body
    const { title, author, pages, year, genre_id, series, series_name, place_in_series } = req.body;

    //Generate book id
    const book_id = helper_CreateBookID();
    // console.log('=================GENRE ID INSERTING: ', genre);

    //Maybe we should check if genreId exists already first in the genre table

    //Book add query // !Front end should send genre id
    const bookQuery = `INSERT INTO book_table (book_id, title, author, pages, year, genre_id, series, series_name, place_in_series) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)` 
    const bookParameters = [book_id, title, author, pages, year, genre_id, series, series_name, place_in_series];

    //Adds book title and author to DB if it doesn't already exist
    db.query(bookQuery, bookParameters)
    .then((data) => {
        db.query('SELECT * FROM book_table')
        .then((data) => {
            res.locals.books = data.rows;
            next();
        })
        .catch((err) => {
            console.log(err.message);
            next({
                log: 'Error in middleware function: bookController.addBook',
                message: {err: `Could not add book: ${title} to database.`}
            });
        });
    }).catch((err) => {
        console.log(err.message);
        next({
            log: 'Error in middleware function: bookController.addBook',
            message: {err: `Could not add book: ${title} to database.`}
        });
    });
}

/*
* ==================================================
*   PREV: None
*   Get all books from table
*   Sets res.locals.books
*   NEXT: None/filterBooks (Optional)
* ==================================================
*/
bookController.getBooks = (req, res, next) => {
    const bookQuery = `SELECT * FROM book_table`

    db.query(bookQuery)
    .then((data) => {
        const retBooks = {};

        const books = data.rows;
        for(let i = 0; i < books.length; i++) {
            retBooks[books[i].book_id] = books[i];
        }

        res.locals.books = retBooks;
        next();
    }).catch((err) => {
        next({
            log: 'Error in middleware function: bookController.getBooks',
            message: {err: 'Could not get books!'}
        });
    });
}

/*
* ==================================================
*   PREV: getBooks
*   Filter books based on search params
*   Requires res.locals.books
*   NEXT: None
* ==================================================
*/
bookController.filterBooks = (req, res, next) => {
    //Results of previous getBooks middleware
    const books = res.locals.books;

    //We do filtering here
    
    next();
}

const helper_CreateBookID = function() {
    // const uniqueId = 
    return Number(Math.floor(Math.random() * 999).toString() + Math.floor(Math.random() * 999).toString());
}

module.exports = bookController;