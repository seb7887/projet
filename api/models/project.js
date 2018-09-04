const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  idea: {
    type: String,
    required: true,
    maxLength: 800,
  },
  keyFunctions: {
    type: String,
    required: true,
    maxLength: 800
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
