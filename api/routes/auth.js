const express = require('express');
const router = express.Router();

const { handleRegister } = require('../controllers/register');
const { handleSignIn } = require('../controllers/signin');

router.post('/register', handleRegister);
router.post('/signin', handleSignIn);

module.exports = router;
