const express = require('express');
const SendAssessmentRouter = express.Router();
const SendAssessmentController = require('../controllers/sendAssessmentController');

// Save Send Assessment
SendAssessmentRouter.post('/sendAssessment/add', SendAssessmentController.save_sendAssessment);

// GetAll Send Assessment
SendAssessmentRouter.get('/sendAssessment/getAll', SendAssessmentController.getAll_sendAssessments);

// Get Send Assessment By ID
SendAssessmentRouter.get('/sendAssessment/get/:id', SendAssessmentController.get_sendAssessment);

// Update Send Assessment
SendAssessmentRouter.put('/sendAssessment/update/:id', SendAssessmentController.update_sendAssessment);

// Delete Send Assessment 
SendAssessmentRouter.delete('/sendAssessment/delete/:id', SendAssessmentController.delete_sendAssessment);

module.exports = SendAssessmentRouter;