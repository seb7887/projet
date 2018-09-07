const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, process.env.SECRET_KEY || 'jwtsecret', (err, decoded) => {
    if (decoded) {
      next();
    } else {
      return next({ status: 401, message: 'Please log in first' });
    }
  });
  } catch (e) {
    return next({ status: 401, message: 'Please log in first' });
  }
}

const checkProjectOwner = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY || 'jwtsecret', (err, decoded) => {
      if (decoded && (decoded.id === req.params.user_id)) {
        return next();
      } else {
        return next({ status: 401, message: 'Unauthorized' });
      }
    })
  } catch (e) {
    return next({ status: 401, message: 'Unauthorized' });
  }
}

module.exports = {
  requireAuth: requireAuth,
  checkProjectOwner: checkProjectOwner,
}