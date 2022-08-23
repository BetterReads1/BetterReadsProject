const { Pool, Client } = require('pg')

const PG_URI = process.env.URI;
console.log('URI:', PG_URI)

const pool = new Pool({
    connectionString: PG_URI
  });


  module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };