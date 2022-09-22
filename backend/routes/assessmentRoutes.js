const express = require('express');
const AssessmentRouter = express.Router();
const AssessmentController = require('../controllers/assessmentController');

// Save Assessment
AssessmentRouter.post('/interview/add', AssessmentController.save_assessment);

// GetAll Assessment
AssessmentRouter.get('/interview/getAll', AssessmentController.getAll_assessments);

// Get Assessment By ID
AssessmentRouter.get('/interview/get/:id', AssessmentController.get_assessment);

// Update Assessment
AssessmentRouter.put('/interview/update/:id', AssessmentController.update_assessment);

// Delete Assessment 
AssessmentRouter.delete('/interview/delete/:id', AssessmentController.delete_assessment);

module.exports = AssessmentRouter;