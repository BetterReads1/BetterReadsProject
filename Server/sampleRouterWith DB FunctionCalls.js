const express = require('express');
const router = express.Router();
const BookService = require('./sampleModuleContainingSQLLikeFuction.js');

/*
 * ==================================================
 *   The ROOT of THIS route ... get
 * ==================================================
 */
router
  .route('/')
  .get((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //! NEEDED to avoid CORS violations
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    const db = req.app.get('db');
    BookService.getAllBooks(db).then((data) => {
      console.log(
        '🔴🟠🟡🟢🔵🟣 | file: book.js | line 10 | BookService.getAllBooks | data',
        data
      );
      return res.status(200).send(data);
    });
  })

  /*
   * ==================================================
   *   The ROOT of THIS route ... post
   * ==================================================
   */
  .post((req, res) => {
    const db = req.app.get('db');
    BookService.insertBook(db, req.body).then((data) => {
      res.send(data);
    });
  });

/*
 * ==================================================
 *   Get an iten by its id
 * ==================================================
 */
router
  .route('/:id')
  .get((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //! NEEDED to avoid CORS violations
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    const db = req.app.get('db');
    BookService.getById(db, req.params.id).then((data) => {
      res.send(data);
    });
  })

  /*
   * ==================================================
   *   Blah
   * ==================================================
   */
  .patch((req, res) => {
    //! May or May Not require CORS headers from above
    const db = req.app.get('db');
    BookService.updateBook(db, req.params.id, req.body).then(() => {
      res.status(204).end();
    });
  })

  /*
   * ==================================================
   *   Blah
   * ==================================================
   */
  .delete((req, res) => {
    //! May or May Not require CORS headers from above
    const db = req.app.get('db');
    BookService.deleteBook(db, req.params.id).then((data) => {
      res.status(204).end();
    });
  });

module.exports = router;
