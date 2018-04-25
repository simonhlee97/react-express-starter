const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sendgrid'
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

const SELECTcustomers = 'SELECT * FROM customers';

app.get('/customers', (req, res) => {
    connection.query(SELECTcustomers, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});


app.get('/api/players', (req, res) => {
  const players = [
    {id: 1, firstName: 'Larry', lastName: 'Bird'},
    {id: 2, firstName: 'Reggie', lastName: 'Miller'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(players);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);