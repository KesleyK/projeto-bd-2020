const mysql = require("mysql");

module.exports = mysql.createConnection({
  host: "localhost",
  user: "junin",
  password: "123456",
  database: "bd_2020",
});
