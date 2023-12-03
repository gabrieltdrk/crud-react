const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "G@briel1999*",
  database: "crudusuarios",
});

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
  const querySEL = "SELECT * FROM usuarios";
  db.query(querySEL, (error, data) => {
    if (error) return res.json();
    return res.send(data);
  });
});

app.post("/users", (req, res) => {
  const queryINS =
    "INSERT INTO usuarios (`name`, `email`, `password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(queryINS, [values], (error, data) => {
    if (error) return res.json();
    return res.send();
  });
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const queryUPD =
    "UPDATE usuarios SET `name` = ?, `email` = ?, `password` = ? WHERE id = ?";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(queryUPD, [...values, id], (error, data) => {
    if (error) return res.json();
    return res.send();
  });
});

app.delete("users/:id", (req, res) => {
  const id = req.params.id;
  const queryDEL = "DELETE FROM usuarios WHERE id = ?";
  db.query(queryDEL, [id], (error, data) => {
    if (error) return res.json(error);
    return res.json();
  });
});

app.listen(8001, (req, res) => {
  console.log("Server is running");
});
