const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysqlConnection = require('./config/mysqlConnection');
require('dotenv').config();
app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL 연결
mysqlConnection.connect((err) => {
  if (err) {
    console.error("MySQL connection error: " + err.stack);
  } else {
    console.log("Connected to MySQL as ID " + mysqlConnection.threadId);
  }
});


module.exports = app;