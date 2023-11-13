const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'nenas158',
    database: 'petcare',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: __dirname + '/migrations',
  },
  seeds: {
    directory: __dirname + '/seeds',
  },
});

module.exports = db;
