const InquiriesModel = require("../models/InquiriesModel");

// Save Inquiries
const save_Inquiries = function (req, res){
    let newInquiries = new InquiriesModel(req.body);

    newInquiries.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            newInquiries
            
            
        });
    });
}

// GetAll Inquiries
const getAll_Inquiries = function (req, res){
    InquiriesModel.find().exec((err, exsitingInquiries) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingInquiries,
        });
      });
}

// Get Inquiries By ID
const get_Inquiries_By_ID = function (req, res){
    let InquiriesID = req.params.id;

    InquiriesModel.findById(InquiriesID,(err,exsitingInquiries)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingInquiries
        });
    });
}

// Update Inquiries
const update_Inquiries = function (req, res){
    InquiriesModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, Inquiries)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete Inquiries
const delete_Inquiries = function (req, res){
    InquiriesModel.findByIdAndRemove(req.params.id).exec((err,deletedInquiries)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedInquiries
        });

    });
}


//get inquiry by uname - user

// const getInquiryByName = function(req, res) {
//     let userName = req.params.name;
//     InquiriesModel.find({ name: userName }).exec((err, inquiries) => {
//       if (err) {
//         return res.status(400).json({
//           error: err
//         })
//       }
//       return res.status(200).json({
//         success: true,
//         exsitingInquiries: inquiries
//       })
//     })
//   };


const getInquiryByName =function(req,res){
    let name = req.params.name;

    InquiriesModel.find({name:name},(err,inquiries)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingInquiries:inquiries
        });
    });
};

module.exports = {save_Inquiries, getAll_Inquiries, get_Inquiries_By_ID, update_Inquiries, delete_Inquiries,getInquiryByName};