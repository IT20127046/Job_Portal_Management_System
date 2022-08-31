const express = require('express');
const InterviewRouter = express.Router();
const InterviewController = require('../controllers/interviewController');

// Save Interview
InterviewRouter.post('/interview/add', InterviewController.save_interview);

// GetAll Interview
InterviewRouter.get('/interview/getAll', InterviewController.getAll_interviews);

// Get Interview By ID
InterviewRouter.get('/interview/get/:id', InterviewController.get_interview);

// Update Interview
InterviewRouter.put('/interview/update/:id', InterviewController.update_interview);

// Delete Interview 
InterviewRouter.delete('/interview/delete/:id', InterviewController.delete_interview);

module.exports = InterviewRouter;