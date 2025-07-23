const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {unless} = require('express-unless');
const router = require('./routes')
const {authenticateRoutes} = require("./config/unlessRoute");
const { authanticateToken } = require('./middlewares/authMiddleware');
// const routes = require('./routes'); 

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authanticateToken);


// Routes
app.use(router)
// app.use('/', routes); 

// Health check
app.get('/', (req, res) => {
  res.send('Bug and Feature Tracking System API is running');
});

module.exports = app;
