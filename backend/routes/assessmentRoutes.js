const express = require('express');
const AssessmentRouter = express.Router();
const AssessmentController = require('../controllers/assessmentController');

// Save Assessment
AssessmentRouter.post('/assessment/add', AssessmentController.save_assessment);

// GetAll Assessment
AssessmentRouter.get('/assessment/getAll', AssessmentController.getAll_assessments);

// Get Assessment By ID
AssessmentRouter.get('/assessment/get/:id', AssessmentController.get_assessment);

// Update Assessment
AssessmentRouter.put('/assessment/update/:id', AssessmentController.update_assessment);

// Delete Assessment 
AssessmentRouter.delete('/assessment/delete/:id', AssessmentController.delete_assessment);

module.exports = AssessmentRouter;