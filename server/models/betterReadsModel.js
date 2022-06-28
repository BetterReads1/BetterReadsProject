const { Pool, Client } = require('pg')

const PG_URI = 'postgres://jpjlycpv:g-AeTv2_q0qNJFDeCsLH6glwaqM3t_LN@jelani.db.elephantsql.com/jpjlycpv';

const pool = new Pool({
    connectionString: PG_URI
  });


  module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };