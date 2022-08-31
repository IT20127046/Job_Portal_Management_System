const InterviewModel = require("../models/interviewModel");

// Save Interview
const save_interview = function (req, res){
    let newInterview = new InterviewModel(req.body);

    newInterview.save((err)=>{
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

// GetAll Interview
const getAll_interviews = function (req, res){
    InterviewModel.find().exec((err, exsitingInterview) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingInterview,
        });
      });
}

// Get Interview By ID
const get_interview = function (req, res){
    let interviewID = req.params.id;

    InterviewModel.findById(interviewID,(err,exsitingInterview)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingInterview
        });
    });
}

// Update Interview
const update_interview = function (req, res){
    InterviewModel.findByIdAndUpdate(
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

// Delete Interview
const delete_interview = function (req, res){
    InterviewModel.findByIdAndRemove(req.params.id).exec((err,deletedInterview)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedInterview
        });

    });
}

module.exports = {save_interview, getAll_interviews, get_interview, update_interview, delete_interview};