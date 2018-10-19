const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  hash: {
    type: String,
    required: true
  },
  done: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
