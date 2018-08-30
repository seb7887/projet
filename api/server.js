const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

// Initialize server
app.listen(process.env.PORT || 8081, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});

module.exports = app;
