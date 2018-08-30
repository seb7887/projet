const mongoose = require('mongoose');

// TODO: set prod + dev
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(process.env.DB, {
  keepAlive: true,
});

module.exports.User = require('./users');
module.exports.Project = require('./project');
