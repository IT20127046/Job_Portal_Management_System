const ResumeModel = require('../models/resumeModel');

// view all resumes - will not need fot this application
const getAll_resumes = function (req, res) {
    ResumeModel.find().exec((err, exsitingResumes) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: true,
            exsitingResumes,
        });
    });
}

// view resume of a given user
const get_resume = function (req, res) {
    ResumeModel.findOne({ userId: req.params.id }).exec((err, exsitingResume) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: true,
            exsitingResume,
        });
    })
}

// save resume
const save_resume = function (req, res) {
    const newResume = new ResumeModel(req.body);
    newResume.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true
        });
    });
}

// update resume
const update_resume = function (req, res) {
    ResumeModel.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, resume) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: true
            });
        }
    );
}


// delete resume
const delete_resume = function (req, res) {
    ResumeModel.findByIdAndDelete(req.params.id).exec((err, deletedResume) => {
        if (err) return res.status(400).json({
            message: "Delete Unsuccessful", err
        });
        return res.json({
            message: "Delete Successful", deletedResume
        });
    });
}

module.exports = { getAll_resumes, get_resume, save_resume, update_resume, delete_resume }