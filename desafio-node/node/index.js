const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "desafio-fullcycle",
};

const connection = mysql.createConnection(config);
const query = `SELECT name FROM people`;

app.get("/", (req, res) => {
  connection.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send("<h1>Full Cycle</h1> </br>" + JSON.stringify(results));
  });
});

app.listen(port, () => {
  console.log(`App rodando na port ${port}`);
});
