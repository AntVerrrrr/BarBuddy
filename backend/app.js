const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysqlConnection = require('./config/mysqlConnection');
const spiritRoutes = require('./routes/SpiritRoutes');
const cocktailRoutes = require('./routes/CocktailRoutes');
require('dotenv').config();

const port = process.env.PORT || 3001;


// MySQL 연결
mysqlConnection.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ' + err.stack);
  } else {
    console.log('Connected to MySQL as ID ' + mysqlConnection.threadId);
  }
});


app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); // Serve static files from the 'uploads' folder


// Routes
app.use('/api/spirits', spiritRoutes);
app.use('/api/cocktails', cocktailRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;