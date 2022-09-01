const express = require('express');
const VacancyRouter = express.Router();
const VacancyController = require('../../controllers/vacancy_management/vacancyControllers');

// Save Vacancy
VacancyRouter.post('/vacancy/add', VacancyController.save_vacancy);

// GetAll Vacancy
VacancyRouter.get('/vacancy/getAll', VacancyController.getAll_vacancy);

// Get Vacancy By ID
VacancyRouter.get('/vacancy/get/:id', VacancyController.get_vacancy);

// Update Vacancy
VacancyRouter.put('/vacancy/update/:id', VacancyController.update_vacancy);

// Delete Vacancy
VacancyRouter.delete('/vacancy/delete/:id', VacancyController.delete_vacancy);

module.exports = VacancyRouter;