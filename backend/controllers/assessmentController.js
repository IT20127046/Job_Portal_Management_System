const AssessmentModel = require("../models/assessmentModel");

// Save Assessment
const save_assessment = function (req, res){
    let newAssessment = new AssessmentModel(req.body);

    newAssessment.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true
        });
    });
}

// GetAll Assessment
const getAll_assessments = function (req, res){
    AssessmentModel.find().exec((err, exsitingAssessment) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingAssessment,
        });
      });
}

// Get Assessment By ID
const get_assessment = function (req, res){
    let assessmentID = req.params.id;

    AssessmentModel.findById(assessmentID,(err,exsitingAssessment)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingAssessment
        });
    });
}

// Update Assessment
const update_assessment = function (req, res){
    AssessmentModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, interivew)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete Assessment
const delete_assessment = function (req, res){
    AssessmentModel.findByIdAndRemove(req.params.id).exec((err,deletedAssessment)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedAssessment
        });

    });
}

module.exports = {save_assessment, getAll_assessments, get_assessment, update_assessment, delete_assessment};