const express = require('express');
const router = express.Router({ mergeParams: true });

const project = require('../controllers/project');
const auth = require('../middleware/auth');

// prefix - /api/projects
router.route('/').get(auth.requireAuth, project.getProjects);
router.route('/').post(auth.requireAuth, project.createProject);
router.route('/:project_id').delete(auth.requireAuth, auth.checkProjectOwner, project.deleteProject);

module.exports = router;
