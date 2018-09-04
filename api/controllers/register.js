const bcrypt = require('bcrypt-nodejs');

const db = require('../models');

const handleRegister = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const hash = bcrypt.hashSync(password);
    const user = await db.User.create({
      email: email,
      username: username,
      hash: hash,
    });

    return res.status(200).json(user[0]);
  } catch(err) {
    if (err.code === 11000) {
      err.message = 'The username and/or email is taken';
    }
    return next({
      status: 400,
      message: err.message,
    });
  }
}

module.exports = {
  handleRegister: handleRegister,
}
