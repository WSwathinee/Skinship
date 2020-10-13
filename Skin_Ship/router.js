//Run node
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'skinship'
});

//get data from table
const app = express();
app.get('/review', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM review', function (error, results, fields) {
     
      if (error) throw error;
      res.send(results)
    });
  });
});

app.listen(3003, () => {
 console.log('Go to http://localhost:3003/review so you can see the data.');
});
