const db = require("../models/betterReadsModel.js")

const booksController = {} 

booksController.getBookId = async (req, res, next) => {
  const { name, author } = req.body
  if (!name || !author) return next({log: 'invalid author or name'})
  try {
    const data = await db.query(`
    SELECT book_id 
    FROM book
    WHERE name = $1 AND author = $2
    `, [name, author])
    res.locals.bookId = data.rows[0].book_id
    return next()
  } catch (err) {
    return next(err)
  }
}

module.exports = booksController