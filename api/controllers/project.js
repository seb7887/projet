const db = require('../models');

const createProject = async (req, res, next) {
  try {
    const project = await db.Project.create({
      
    })
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createProject: createProject,
}
