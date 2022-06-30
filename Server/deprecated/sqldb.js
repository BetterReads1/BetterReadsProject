/*
* ==================================================
*   This block added by Jim White as sample for
*   database integration / setup.
* ==================================================
*/

const db = require('knex')({
  client: 'mysql2',
  connection: {
    host: '23.235.206.125',
    port: 3306,
    user: 'jimtermini_bradmin',
    password: '123br456',
    database: 'jimtermini_bestestreads',
  },
});

// !NOT USING
app.set('db', db); //* Allows the whole app to use the db