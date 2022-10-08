const InterviewMsgModel = require("../models/InterviewMsgModel");

// Save Message
const save_message = function (req, res){
    let newMessage = new InterviewMsgModel(req.body);

    newMessage.save((err)=>{
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

// GetAll Messages
const getAll_messages = function (req, res){
    InterviewMsgModel.find().exec((err, exsitingMessages) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingMessages,
        });
      });
}

// Get Message By ID
const get_message = function (req, res){
    let messageID = req.params.id;

    InterviewMsgModel.findById(messageID,(err,exsitingMessages)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingMessages
        });
    });
}

// Update Message
const update_message = function (req, res){
    InterviewMsgModel.findByIdAndUpdate(
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

// Delete Message
const delete_message = function (req, res){
    InterviewMsgModel.findByIdAndRemove(req.params.id).exec((err,deletedMessage)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedMessage
        });

    });
}

module.exports = {save_message, getAll_messages, get_message, update_message, delete_message};