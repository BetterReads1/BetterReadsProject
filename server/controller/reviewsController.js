const db = require("../models/betterReadsModel.js"); 

const reviewsController = {}; 


// Gets all reviews from the database
reviewsController.getReviews = async (req, res, next) => {
  try {
    const data =  await db.query('SELECT * from review')
    res.locals.reviews = data.rows
    return next()
  } catch(err) {
    return next(err);
  }
}

// posting reviews to the database 
reviewsController.postReviews = async (req, res, next) => {
  const { comments, plotline, unpredictability, 
    pace, writing_style, ending, overall } = req.body
  try {
    if (!comments || !plotline || !unpredictability || !pace || !writing_style || !ending || !overall) return next({ log: 'Invalid body' })
    const data = await db.query(`
    INSERT INTO review (book_id, comments, plotline, unpredictability, pace, writing_style, ending, overall)  
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `, [res.locals.bookId, comments, plotline, unpredictability, pace, writing_style, ending, overall])
    res.locals.postedReviews = data.rows[0]
    return next()
  } catch(err) {
    console.log(err)
    return next(err)
  }
}

module.exports = reviewsController