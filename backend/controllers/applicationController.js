const ApplicationModel = require('../models/applicationModel');

// save (submit application)
const save_application = function (req, res){
    let newApplication = new ApplicationModel(req.body);
    // console.log(newApplication);
    
    newApplication.save((err)=>{
        if(err) {
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true
        });
    });
}

// view all applications 
const getAll_applications = function (req, res){
    ApplicationModel.find().exec((err, exsitingApplications) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingApplications,
        });
      });
}

// view all received applications according to the company
const getAll_receivedApplications = function (req, res){

    ApplicationModel.find( { companyId: req.params.id } ).exec((err, exsitingApplications) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingApplications,
        });
      })
}

// view all submitted applications according to the applicant
const getAll_submittedApplications = function (req, res){

    ApplicationModel.find( { applicantId: req.params.id } ).exec((err, exsitingApplications) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingApplications,
        });
      })
}

// view detailed application  
const get_application = function (req, res){

  ApplicationModel.findOne( { _id: req.params.id}, (err,exsitingApplication)=>{
      if(err){
          return res.status(400).json({success:false, err});
      }
      return res.status(200).json({
          success:true,
          exsitingApplication
      });
  });
} 

module.exports = { save_application, getAll_applications, getAll_receivedApplications, getAll_submittedApplications, get_application }