const express = require('express');
const InterviewMsgRouter = express.Router();
const InterviewMsgController = require('../controllers/interviewMsgController');

// Save Message
InterviewMsgRouter.post('/interviewMsg/add', InterviewMsgController.save_message);

// GetAll Messages
InterviewMsgRouter.get('/interviewMsg/getAll', InterviewMsgController.getAll_messages);

// Get Message By ID
InterviewMsgRouter.get('/interviewMsg/get/:id', InterviewMsgController.get_message);

// Update Message
InterviewMsgRouter.put('/interviewMsg/update/:id', InterviewMsgController.update_message);

// Delete Message 
InterviewMsgRouter.delete('/interviewMsg/delete/:id', InterviewMsgController.delete_message);

module.exports = InterviewMsgRouter;