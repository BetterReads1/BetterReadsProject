const db = require('../Models/betterReadsModel');

const queryMiddleware = {}

/*
* ==================================================
*   Before: None
*   Receives 'title' and 'author' from 'req.body'
*   Adds a book with title and author to 'book_table' using the ($1 and $2 params)
*   The values for those are saved in the book_tableParamArray array
!   We don't know where this information is coming from, since the route starts at default! ('/')
*   Next: getBook_Id

    Important Info:
        hash refers to the tags (as in, hash tag haha)
        

*   req.body info masterlist: {
*       title
*       author
*       name
*       comments
*       tags
*       plotline
*       unpredictability
*       pace
*       writingStyle
*       ending
*       overallEnjoyability
*   }

*   res.locals info masterlist: {
*       book_id
*       post_id
*   }


*   TABLES: 
        book_table {
            book_id,
            title, 
            author
        }
        post_table  {
            username, 
            comments, 
            book_id
            post_id,
        }
        
        ! The hash table is a single layered table that ONLY CONTAINS KEYS NAMED 'HASH'
        hash_table {
            hash
        }

        rating_table {
            post_id, 
            book_id, 
            plotline, 
            unpredictability, 
            pace, writing_style, 
            ending, 
            overall_enjoyability
        }

        post_hash_join {
            post_id, 
            hash_id
        }

* ==================================================
*/
queryMiddleware.addToBook_Table = (req, res, next) => {
    //destructure the request body
    const { title, author } = req.body;
    //query for adding to the book table
    const book_tableAdd = `INSERT INTO book_table (title, author) VALUES ($1, $2) RETURNING *` 
    const book_tableParamArray = [title, author];
    //adds book title and author to database if it doesnt exist
    db.query(book_tableAdd, book_tableParamArray)
    .then((data) => {
        // console.log(data);
        next();
    }).catch((err) => {
        next();
        // next({
        //     log: 'addToBook_Table error',
        //     message: {err: 'An error occured in addToBook_Table'}
        // });
    });
}

/*
* ==================================================
*   Before: addToBook_Table
*   Receives the 'title' from the req body and uses it to search for it's corresponding book ID
*   This ID is then saved in res.locals as 'book_id'
*   Next: addToPost_Table
* ==================================================
*/
queryMiddleware.getBook_Id = (req, res, next) => {
    //destructure the request body
    const { title } = req.body;
    //query for adding getting book_id
    const book_tableAdded = `SELECT book_id FROM book_table WHERE title = $1`
    const book_idParamArray = [title];

    db.query(book_tableAdded, book_idParamArray)
    .then((data) => {
        res.locals.book_id = data.rows[0].book_id;
        next();
    }).catch((err) => {
        return next();
    })
}

/*
* ==================================================
*   Before: getBook_Id
*   Receives 'name' 'comments' from "req.body" and 'book_id' from "res.locals"
*   Inserts that information as 'username', 'comments', and 'book_id' into 'post_table'
*   Next: getPost_Id
* ==================================================
*/
queryMiddleware.addToPost_Table = (req, res, next) => {
    const { name, comments } = req.body;
    const post_tableAdd = `INSERT INTO post_table (username, comments, book_id) VALUES ($1, $2, $3) RETURNING *`
    const post_tableParamArray = [name, comments, res.locals.book_id];

    db.query(post_tableAdd, post_tableParamArray)
    .then((data) => {
        // console.log("SUCCESSFULLY ADDED POST TO POST_TABLE");
        next();
    }).catch((err) => {
        next({
            log: 'addPostTable error',
            message: {err: 'An error occured in addToPostTable'}
        });
    });
}

/*
* ==================================================
*   Before: 'addToPost_Table'
*   Receives name and comments from req.body
*   Uses that information to select the 'post_id' from 'post_table'
*   Saves the post_id into res.locals.post_id
*   Next: 'addToHash_Table'
* ==================================================
*/
queryMiddleware.getPost_Id = (req, res, next) => {
    //destructure the request body
    const { name, comments } = req.body;
    const book_id = res.locals.book_id;
    //query for adding getting book_id
    const post_tableAdded = `SELECT post_id FROM post_table WHERE username = $1 AND comments = $2`
    const post_idParamArray = [name, comments];

    db.query(post_tableAdded, post_idParamArray)
    .then((data) => {
        //console.log("Data:", data)
        res.locals.post_id = data.rows[0].post_id;
        next();
    }).catch((err) => {
        return next({
            log: 'getting post_id',
            message: {err: 'An error occured in getting post_id'}
        });
    })
}

/*
* ==================================================
*   Before: 'getPost_Id'
*   Retrieve tags from req.body
*   These tags are a single string, the individual tags are separated by commas
*   tagsArray are the result of splitting the tags string by its commas
!   THE QUERY ASSUMES THAT THERE ARE THREE TAGS
!   These three tags are then inserted into 'hash_table' all as 'hash'
!   We have no idea what this does.
ToDo: TEST ON SQL SERVER
*   Somehow these hash_ids are saved into res.locals.hashOne,Two,Three respectively
*   Next: 'addToRating_Table'
* ==================================================
*/
queryMiddleware.addToHash_Table = (req, res, next) => {
    //destructure the request body
    const { tags } = req.body;
    const tagsArray = tags.split(",");
    console.log(tagsArray)

    const queryString = `INSERT INTO hash_table (hash) VALUES ($1), ($2), ($3) RETURNING *`

    db.query(queryString, tagsArray)
    .then((data) => {
        console.log(" -------------------------------------------------------- ADD TO HASH TABLE D:", data)
        res.locals.hashOne = data.rows[0].hash_id;
        res.locals.hashTwo = data.rows[1].hash_id;
        res.locals.hashThree = data.rows[2].hash_id;
        next();
    })
    .catch((err) => {
        return next();
    })
    //query for adding to the book table
    //adds book title and author to database if it doesnt exist
}


/* 
* ===================================================================
*   Before: 'addToHash_Table'
*   Gets book_id and post_id from res.locals
*   Receives plotline, unpredictability, pace, writingStyle, ending, and overallEnjoyability from req.body
*   INSERTS these values as post_id, book_id, plotline, unpredictability, pace, writing_style, ending, and overall_enjoyability in 'rating_table'
*   After: 'addToPost_Hash_Join'
* ===================================================================
*/
// add to rating_table
queryMiddleware.addToRating_Table = (req, res, next) => {
    const { book_id, post_id } = res.locals;
    const {  plotline, unpredictability, pace, writingStyle, ending, overallEnjoyability } = req.body;
    const rating_tableAdd = `INSERT INTO rating_table ( post_id, book_id, plotline, unpredictability, pace, writing_style, ending, overall_enjoyability) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`
    const rating_tableParamArray = [post_id, book_id, plotline, unpredictability, pace, writingStyle, ending, overallEnjoyability];
    
    // console.log("book_id:", book_id);
    // console.log("post_id:", post_id);
    // console.log(rating_tableParamArray);

    db.query(rating_tableAdd, rating_tableParamArray)
    .then((data) => {
        // console.log("SUCCESSFULLY ADDED RATING_TABLE");
        next();
    }).catch((err) => {
        next({
            log: 'addToRating_Table error',
            message: {err: 'An error occured in addToRating_Table'}
        });
    });
}


/* Add to post_hash table
* ==================================================
*   Before: 'addToRating_Table'
*   Gets hashOne, hashTwo, hashThree, and post_id
*   Next: 'server.js'
* ==================================================
*/
queryMiddleware.addToPost_Hash_Join = (req, res, next) => {
    const { hashOne, hashTwo, hashThree, post_id } = res.locals;
    //query for adding to the book table
    const post_hash_tableAdd = `INSERT INTO post_hash_join (post_id, hash_id) VALUES ($1, $2), ($1, $3), ($1, $4) RETURNING *`
    const post_hash_tableParamArray = [post_id, hashOne, hashTwo, hashThree];
    //adds book title and author to database if it doesnt exist
    db.query(post_hash_tableAdd, post_hash_tableParamArray)
    .then((data) => {
        console.log("-------------------------------------------------ADD TO POST HASH TABLE:",data);
        next();
    }).catch((err) => {
        next({
            log: 'addToPost_Hash_table error',
            message: {err: 'An error occured in addToPost_Hash_tabl'}
        });
    });
}




module.exports = queryMiddleware