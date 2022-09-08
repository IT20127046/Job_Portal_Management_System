const VacancyModel = require("../../models/vacancy_management/vacancyModal");

// Save Vacancy Details
const save_vacancy = function (req, res) {
  let newVacancy = new VacancyModel(req.body);
  newVacancy.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
    });
  });
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
const getVacancyByName =function(req,res){
  let name = req.params.name;

  VacancyModel.find({company:name},(err,vacancies)=>{
      if(err){
          return res.status(400).json({success:false, err});
      }
      return res.status(200).json({
          success:true,
          exsitingVacancies:vacancies
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
