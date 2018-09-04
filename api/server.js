const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const errorHandler = require('./controllers/error');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

// Initialize server
app.listen(process.env.PORT || 8081, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});

module.exports = app;
