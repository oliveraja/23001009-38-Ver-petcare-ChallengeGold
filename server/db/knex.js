const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_postgres_user',
  host: 'your_postgres_host',
  database: 'your_database_name',
  password: 'your_database_password',
  port: 5432,
});

module.exports = pool;
