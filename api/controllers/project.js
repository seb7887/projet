const db = require('../models');

const getProjects = async (req, res, next) => {
  try {
    const projects = await db.Project.find();
    return res.status(200).json(projects);
  } catch (err) {
    next({ status: 400, message: 'Cannnot get the projects' });
  }
}

const createProject = async (req, res, next) => {
  try {
    const { name, idea, features, keywords } = req.body;
    const project = await db.Project.create({
      name: name,
      idea: idea,
      features: features,
      keywords: keywords.split(','),
      user: req.params.user_id,
    });
    return res.status(200).json(project);
  } catch (err) {
    return next({ status: 400, message: 'Cannot create project' });
  }
}

const deleteProject = async (req, res, next) => {
  try {
    const projectToDelete = await db.Project.findById(req.params.project_id);
    if (projectToDelete.user == req.params.user_id) {
      await projectToDelete.remove();
      return res.status(200).json(projectToDelete); 
    }
    return next({ status: 401, message: 'Unauthorized'});
  } catch (err) {
    return next({ status: 400, message: 'Cannot delete project' });
  }
}

const doneProject = async (req, res, next) => {
  try {
    const foundUser = await db.User.findById(req.params.user_id);
    if (req.params.done === 'done') {
      if (foundUser.done.indexOf(req.params.project_id) > -1) {
        return next({ status: 400, message: 'Cannot mark as done'});
      }
      foundUser.done.push(req.params.project_id);
    } else {
      let index = foundUser.done.indexOf(req.params.project_id);
      if (index > -1) {
        foundUser.done.splice(index, 1);
      } else {
        return next({ status: 400, message: 'Cannot mark as undone'});
      }
    }
    // const updatedUser = await db.User.findByIdAndUpdate(req.params.user_id, foundUser);
    await foundUser.save();
    return res.status(200).json(foundUser);
  } catch (err) {
    return next({ status: 400, message: 'Cannot mark as done/undone' });
  }
}

module.exports = {
  getProjects: getProjects,
  createProject: createProject,
  deleteProject: deleteProject,
  doneProject: doneProject,
}
