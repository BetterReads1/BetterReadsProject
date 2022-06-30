const { Console } = require('console');
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
*   NEXT: addRating
* ==================================================
*/
jointController.addBook = (req, res, next) => {
    //Receive title and author from req.body
    const { title, author, pages, year, genre_id, series, series_name, place_in_series } = req.body[0];

    //Check if genre exists. If it doesn't, throw an error!
    if(!res.locals.genres[genre_id]) {
        console.log(genre_id + ' does not exist in: ', res.locals.genres);
        return next({
            log: 'Error in middleware function: jointController.addBook',
            message: {err: `Could not add book: ${title} to database because genre_id: ${genre_id} could not be found in database!`}
        });
    }
    console.log('CONFIRMED: Genre exists!');

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
    console.log('CONFIRMED: Book doesn\'t exists!');

    
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

        //Format the data
        Console.log('ADDED RATING! PRE FORMATTED: ', retData);
        retData.genre = res.locals.genres[retData.genre];
        retData.tags = retData.tags.split(',');
        Console.log('ADDED RATING! SENDING: ', retData);

        next();
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