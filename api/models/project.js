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
  features: {
    type: String,
    required: true,
    maxLength: 800
  },
  keywords: {
    type: [String],
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
