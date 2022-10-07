const express = require("express");
const VacancyRouter = express.Router();
const multer = require("multer");
const VacancyController = require("../controllers/vacancyControllers");

//Save image uisng multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../frontend/public/images");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

VacancyRouter.post("/vacancy/add", upload.single("image"),VacancyController.save_vacancy);
// Save Vacancy
// VacancyRouter.post("/vacancy/add", VacancyController.save_vacancy);

// GetAll Vacancy
VacancyRouter.get("/vacancy/getAll", VacancyController.getAll_vacancy);

// Get Vacancy By ID
VacancyRouter.get("/vacancy/get/:id", VacancyController.get_vacancy);

// Update Vacancy
VacancyRouter.put("/vacancy/update/:id", VacancyController.update_vacancy);

// Delete Vacancy
VacancyRouter.delete("/vacancy/delete/:id", VacancyController.delete_vacancy);

// Get Vacancy By Name
VacancyRouter.get( "/vacancy/get/name/:name", VacancyController.getVacancyByName);

module.exports = VacancyRouter;
