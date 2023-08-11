// 데이터베이스를 받아올 js 파일을 생성한 후 연동

const mysql = require("mysql2");
//connection 객체 생성
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "po8610251.",
  database: "user_test",
});

// Connect
connection.connect(function (err) {
  if (err) {
    console.error("mysql connection error");
    console.error(err);
    throw err;
  }
});

module.exports = connection;
