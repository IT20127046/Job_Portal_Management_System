const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controllers/userController');

// userRegistration
UserRouter.post('/user/registration', UserController.userRegistration);

// userLogin
UserRouter.post('/user/login', UserController.userLogin);

// GetAll 
UserRouter.get('/users', UserController.getUsers);

// Get By ID
UserRouter.get('/user/:id', UserController.getUser);

//get users by type - admin
UserRouter.get('/users/:type', UserController.getUserByType);

// Update Sample 
UserRouter.put('/user/update/:id', UserController.updateUser);

// Delete Sample
// UserRouter.delete('/sample/delete/:id', SampleController.delete_sample);

module.exports = UserRouter;