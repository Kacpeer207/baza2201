
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'szkola',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Połączono z bazą danych MySQL');
});

app.get('/uczniowie', (req, res) => {
  db.query('SELECT * FROM uczniowie', (err, results) => {
    if (err) throw err;
    res.json(results);
    console.log(results);
  });
});

app.listen(5000, () => {
  console.log('Serwer działa na porcie 5000');
});