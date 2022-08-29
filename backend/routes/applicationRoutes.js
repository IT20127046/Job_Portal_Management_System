const express = require('express');
const ApplicationRouter = express.Router();
const ApplicationController = require('../controllers/applicationController');

// save 
ApplicationRouter.post('/applications/apply', ApplicationController.save_application);


module.exports = ApplicationRouter;