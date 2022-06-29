const { Pool, Client } = require('pg')

// post our PG_URI here
const PG_URI = 'postgres://bjzizkoh:b4kfJAYFq59yYelVoMRfoAvIxEppJaeG@heffalump.db.elephantsql.com/bjzizkoh';

const pool = new Pool({
    connectionString: PG_URI
  });


  module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };