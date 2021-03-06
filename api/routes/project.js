const express = require('express');
const router = express.Router({ mergeParams: true });

const project = require('../controllers/project');
const auth = require('../middleware/auth');

// prefix - /api/projects
router.route('/').get(auth.requireAuth, project.getProjects);
router.route('/user/:user_id').post(auth.requireAuth, auth.checkProjectOwner, project.createProject);
router.route('/user/:user_id/project/:project_id').delete(auth.requireAuth, auth.checkProjectOwner, project.deleteProject);
router.route('/user/:user_id/project/:project_id/:done').put(auth.requireAuth, project.doneProject);

module.exports = router;
