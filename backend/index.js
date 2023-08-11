const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
const database = require("./database");

app.use(bodyParser.json());
app.use(express.json());

// app.get()을 사용하여 res(응답)에 data를 보내줌
app.get("/api/user/myinfo", (req, res) => {
  // 쿼리 입력하여 에러가 없다면 res에게 data 전송
  database.query("SELECT * FROM users", (err, data) => {
    if (!err) {
      res.send({ data });
    } else console.log(err);
  });
});

app.post("/api/user", function (req, res) {
  var user = {
    userid: req.body.userid,
    name: req.body.name,
    address: req.body.address,
  };
  var query = database.query(
    "insert into users set ?",
    user,
    function (err, result) {
      if (err) {
        console.error(err);
        throw err;
      }
      res.status(200).send("success");
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
