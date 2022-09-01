const express = require('express');
const AdminRouter = express.Router();
const AdminController = require('../controllers/adminController');

// adminLogin
AdminRouter.post('/admin/login', AdminController.adminLogin);

// adminRegister
AdminRouter.post('/admin/register', AdminController.adminRegister);


module.exports = AdminRouter;