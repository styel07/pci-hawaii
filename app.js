const express = require('express');
const path = require('path');
const bodyParser  = require('body-parser');
const cors = require("cors");
const passport = require("passport");
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to datbase
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('connected to datbase', config.database);
});

// On Error
mongoose.connection.on('error', () => {
  console.log('database error', config.database);
});

const app = express();
const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS Middleware allow ability for others to access our API from other domains
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});
// Start Server
app.listen(port, () => {
  console.log('Server stated on port ' + port);
});
