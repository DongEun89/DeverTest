const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "po8610251.",
  database: "user_test",
});

module.exports = connection;
