const express = require('express');
const ResumeRouter = express.Router();
const ResumeController = require('../controllers/resumeController');

// save
ResumeRouter.post('/resumes/save', ResumeController.save_resume);

// get all - will not need fot this application
ResumeRouter.get('/resumes', ResumeController.getAll_resumes); 

// get resume of a given user
ResumeRouter.get('/resumes/:id', ResumeController.get_resume);

// update resume
ResumeRouter.patch('/resumes/update/:id', ResumeController.update_resume);

// delete resume
ResumeRouter.delete('/resumes/delete/:id', ResumeController.delete_resume);

module.exports = ResumeRouter;