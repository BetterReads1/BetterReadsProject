/*
 * ==================================================
 *   Just a BookService function to store centrally
 *   all the KNEX SQL like queries.
 * ==================================================
 */
const BookService = {
  getAllBooks(db) {
    // return db.select("description").from("BookDets");
    return db.select('*').from('BookDets');
  },

  insertBook(db, newBook) {
    return db
      .insert(newBook)
      .into('BookDets')
      .returning('*')
      .then((rows) => {
        return rows[0];
      });
  },

  getById(db, id) {
    return db.from('BookDets').select('*').where('id_Book', id).first();
  },

  deleteBook(db, id) {
    return db('BookDets').where({id}).delete();
  },

  updateBook(db, id, bookFields) {
    return db('BookDets').where({id}).update(bookFields);
  },
};

module.exports = BookService;
