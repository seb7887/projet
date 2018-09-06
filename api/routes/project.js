const express = require('express');
const router = express.Router({ mergeParams: true });

const project = require('../controllers/project');

// prefix - /api/projects
router.route('/').get(project.getProjects);
router.route('/').post(project.createProject);
router.route('/:project_id').delete(project.deleteProject);

module.exports = router;
