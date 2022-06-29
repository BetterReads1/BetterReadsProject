const { nextTick } = require('process');
const db = require('../Models/betterReadsModel');

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
    const { title, author } = req.body;

    //Generate book id
    const bookid = helper_CreateBookID();

    //Book add query
    const bookQuery = `INSERT INTO book_table (title, author, book_id) VALUES ($1, $2, $3) RETURNING *` 
    const bookParameters = [title, author, bookid];

    //Adds book title and author to DB if it doesn't already exist
    db.query(bookQuery, bookParameters)
    .then((data) => {
        console.log('Data after addBook: ', data.rows);
        next();
    }).catch((err) => {
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
        console.log('Data after getBooks: ', data.rows);
        res.locals.books = data.rows;
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
    return 515151;
}

module.exports = bookController;