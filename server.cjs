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

// Endpoint to add data to the database
app.post("/data", (req, res) => {
  const data = req.body;
  console.log("Received data:", data); // Log the received data
  pool.query("INSERT INTO transaction SET ?", data, (error, results) => {
    if (error) {
      console.error("Error inserting data:", error); // Log the error
      res.status(500).send(error);
    } else {
      res.status(201).send(results);
    }
  });
});

// Endpoint to update data in the database
app.put("/data/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log("Updating data for ID:", id, data); // Log the update data
  pool.query(
    "UPDATE transaction SET ? WHERE id = ?",
    [data, id],
    (error, results) => {
      if (error) {
        console.error("Error updating data:", error); // Log the error
        res.status(500).send(error);
      } else {
        res.status(200).send(results);
      }
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
