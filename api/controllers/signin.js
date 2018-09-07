const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const db = require('../models');

const handleSignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password) {
      return next({ status: 400, message: 'Incorrect form submission' });
    }
    const user = await db.User.findOne({
      email: email,
    });
    const isValid = bcrypt.compareSync(password, user.hash);
    if (isValid) {
      const jwtPayload = { id: user._id };
      const token = jwt.sign(jwtPayload, process.env.SECRET_KEY || 'jwtsecret', { expiresIn: '2 days' });
      return res.status(200).json({ user, token });
    }
    return next({ status: 400, message: 'Invalid Email/Password' });
  } catch(e) {
    return next({ status: 400, message: 'Invalid Email/Password' });
  }
}

module.exports = {
  handleSignIn: handleSignIn
}
