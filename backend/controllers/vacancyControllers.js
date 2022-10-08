const VacancyModel = require("../models/vacancyModal");
// Save Vacancy Details
const save_vacancy = async (req, res) => {
  const newVacancy = new VacancyModel({
    jobId: req.body.jobId,
    jobTitle: req.body.jobTitle,
    company: req.body.company,
    workPlaceType: req.body.workPlaceType,
    location: req.body.location,
    noOfVacancy: req.body.noOfVacancy,
    jobType: req.body.jobType,
    description: req.body.description,
    image: req.file.originalname,
    closingDate: req.body.closingDate,
    adminStatus: req.body.adminStatus,
    companyId: req.body.companyId,
  });
  await newVacancy
    .save()
    .then(() => res.json("New vacancy created!"))
    .catch((err) => res.status(400).json(`Error:${err}`));
};

// GetAll Vacancy Details
const getAll_vacancy = function (req, res) {
  VacancyModel.find().exec((err, exsitingVacancy) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      exsitingVacancy,
    });
  });
};

// Get Vacancy Details By ID
const get_vacancy = function (req, res) {
  let vacancyID = req.params.id;
  VacancyModel.findById(vacancyID, (err, exsitingVacancy) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      exsitingVacancy,
    });
  });
};

// Update Vacancy Details
const update_vacancy = function (req, res) {
  VacancyModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, exsitingVacancy) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: true,
      });
    }
  );
};

// Delete Vacancy Details
const delete_vacancy = function (req, res) {
  VacancyModel.findByIdAndRemove(req.params.id).exec((err, deletedVacancy) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.json({
      success: true,
      deletedVacancy,
    });
  });
};

//get Vacancy By Name
const getVacancyByName = function (req, res) {
  let name = req.params.name;

  VacancyModel.find({ company: name }, (err, vacancies) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      exsitingVacancies: vacancies,
    });
  });
};

module.exports = {
  save_vacancy,
  getAll_vacancy,
  get_vacancy,
  update_vacancy,
  delete_vacancy,
  getVacancyByName,
};
