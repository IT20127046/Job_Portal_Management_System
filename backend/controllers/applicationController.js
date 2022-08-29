const ApplicationModel = require('../models/applicationModel');

// save (submit application)
const save_application = function (req, res){
    let newApplication = new ApplicationModel(req.body);

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

module.exports = { save_application }