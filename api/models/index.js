const mongoose = require('mongoose');
const config = require('../libs/config');

// TODO: set prod + dev
mongoose.set('debug', config.debug);
mongoose.Promise = Promise;
mongoose.connect(config.db, {
  keepAlive: true,
});

module.exports.User = require('./users');
module.exports.Project = require('./project');
