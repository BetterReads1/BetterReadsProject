const { Pool, Client } = require('pg')
require('dotenv').config();

let PG_URI;

if (process.env.NODE_ENV === 'test') {
  console.log('DB: BBR_DB_TEST');
  PG_URI = process.env.POSTGRESQL_BBR_DB_TEST;
}
else {
  console.log('DB: BBR_DB')
  PG_URI = process.env.POSTGRESQL_BBR_DB;
}

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
