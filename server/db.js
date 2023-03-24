const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "daniel_h",
  port: 5432,
  database: "authtodolist"
});

module.exports = pool;
