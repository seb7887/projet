const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const redis = require('redis');

const db = require('../models');

const redisClient = redis.createClient(process.env.REDIS_URI || 'redis://redis:6379');

const getAuthTokenId = (req, res) => {
  const { authorization } = req.headers;
  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(400).json('Unauthorized');
    }
    return res.json({ id: reply });
  });
}

const signToken = (email) => {
  const jwtPayload = { email };
  return jwt.sign(jwtPayload, process.env.SECRET_KEY, { expiresIn: '2 days' });
}

const setToken = (token, value) => {
  return Promise.resolve(redisClient.set(token, value));
}

const createSessions = (user) => {
  const { email } = user;
  const token = signToken(email);
  return setToken(token, id)
    .then(() => {
      return { success: 'true', usedId: id, token };
    })
    .catch(console.log);
}

const handleSignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({
      email: email,
    })
    const isValid = bcrypt.compareSync(password, user.hash);
    if (isValid) {
      const token = signToken(email);
      
    }
    return next({ status: 400, message: 'Invalid Email/Password' });
  } catch (e) {
    return next({ status: 400, message: 'Invalid Email/Password' });
  }
}

const signInAuth = (db, bcrypt) => (req, res, next) => {
  const { authorization } = req.headers;
  return authorization ? getAuthTokenId(req, res) : 
    handleSignIn(req, res, next)
      .then(data => {
        return data.id && data.email ? createSessions(data) : Promise.reject(data);
      })
      .then(session => res.json(session))
      .catch((err) => res.status(400).json(err));
}

module.exports = {
  redisClient: redisClient,
  signInAuth: signInAuth,
}
