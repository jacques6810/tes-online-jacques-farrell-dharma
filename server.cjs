const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "database_tesonline_inovasi",
});

// Endpoint to get data from the database
app.get("/data", (req, res) => {
  pool.query("SELECT * FROM transaction", (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
