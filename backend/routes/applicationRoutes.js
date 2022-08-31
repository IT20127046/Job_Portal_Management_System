const express = require('express');
const ApplicationRouter = express.Router();
const ApplicationController = require('../controllers/applicationController');

// save 
ApplicationRouter.post('/applications/apply', ApplicationController.save_application);

// get all
ApplicationRouter.get('/applications', ApplicationController.getAll_applications);

// get received applications according to the company
ApplicationRouter.get('/applications/received/:id', ApplicationController.getAll_receivedApplications);

// get all submitted applications according to the user
ApplicationRouter.get('/applications/submitted/:id', ApplicationController.getAll_submittedApplications);

module.exports = ApplicationRouter;