const SendAssessmentModel = require("../models/sendAssessmentModel");

// Save Send Assessment
const save_sendAssessment = function (req, res){
    let newSendAssessment = new SendAssessmentModel(req.body);

    newSendAssessment.save((err)=>{
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

// GetAll Send Assessment
const getAll_sendAssessments = function (req, res){
    SendAssessmentModel.find().exec((err, exsitingAssessment) => {
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

// Get Send Assessment By ID
const get_sendAssessment = function (req, res){
    let assessmentID = req.params.id;

    SendAssessmentModel.findById(assessmentID,(err,exsitingAssessment)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingAssessment
        });
    });
}

// Update Send Assessment
const update_sendAssessment = function (req, res){
    SendAssessmentModel.findByIdAndUpdate(
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

// Delete Send Assessment
const delete_sendAssessment = function (req, res){
    SendAssessmentModel.findByIdAndRemove(req.params.id).exec((err,deletedAssessment)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedAssessment
        });

    });
}

module.exports = {save_sendAssessment, getAll_sendAssessments, get_sendAssessment, update_sendAssessment, delete_sendAssessment};