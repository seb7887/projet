require('dotenv').config();

const config = {
  db: process.env.DB,
  debug: false,
  jwtSecret: process.env.SECRET_KEY,
}

module.exports = config;
