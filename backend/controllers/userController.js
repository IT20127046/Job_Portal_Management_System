const express = require('express');
const mongoose = require('mongoose');
const Users = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { type } = require('express/lib/response');
const { v4: uuidv4 } = require('uuid');


// const router = express.Router();

process.env.SECRET_KEY = "secret2022";

//user registration with password encryption - user
const userRegistration = (req, res)=>{
  const current = new Date();
  let userData = {
    uid: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    field: req.body.field,
    address: req.body.address,
    type: req.body.type,
    password: req.body.password,
    dateRegistered: current
  }

  Users.findOne({
    name: req.body.name
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          // console.log("bcrypt")
          Users.create(userData)
            .then(respond => {
            //   console.log(res)

              res.status(200).json({
                success: "Registered successfully"
              }).end()

          
           

            })
            .catch(err => {
              // console.log("catch")
              // res.status(400).send("error" + err).end();
              res.status(400).json({
                errorMessage: 'Something went wrong!',
                status: false
              });
              console.log("error: " + err);
            });
        })

      }
      else {
        // res.status(400).json({
        //     error: "Your ID number is already registered"
        // }).end()
        return res.status(401).json({
          errorMessage: "Your user name is already registered. Use another user name",
          status: false
        });
      }
    })
    .catch(err => {
      // res.send("error" + err)
      res.status(400).json({
        errorMessage: 'Something went wrong!',
        status: false
      });
      console.log("error: " + err)
    })
}








//user login with jsonwebtoken - user
const userLogin = function(req, res) {
  Users.findOne({
    name: req.body.name,
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            uid: user.uid,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            field: user.field,
            address: user.address,
            type: user.type,
            dateRegistered: user.dateRegistered
          }
          const userToken = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(userToken)
        }
        else {
          // res.json({ error: "Please check your password and try again" })
          return res.status(401).json({
            errorMessage: 'User unauthorized!',
            status: false
          });
        }
      }
      else {
        // res.json({ error: "ID number is not registered in the system" })
        return res.status(401).json({
          errorMessage: "Your user name cannot be recognized",
          status: false
        });
      }
    })
    .catch(err => {
      // res.send("error" + err);
      res.status(400).json({
        errorMessage: 'Something went wrong!',
        status: false
      });
      console.log("error: " + err);
    })
};








//get a specific user
const getUser = function(req, res) {
  let userId = req.params.id;

  Users.findById(userId, (err, user) => {
    if (err) {
      return res.status(404).json({
        success: false,
        err,
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  });
};




//get users - admin
const getUsers = function(req, res) {
  Users.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingUsers: users,
    });
  });
};

//get users by type - admin

const getUserByType = function(req, res) {
  let usertype = req.params.type;
  Users.find({ type: usertype }).exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: err
      })
    }
    return res.status(200).json({
      success: true,
      existingUsers: users
    })
  })
};

//update user - admin
const updateUser = function(req, res) {
  Users.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Updated successfully",
      });
    }
  );
};



//delete user
const removeUser =  (req, res) => {
  Users.findByIdAndDelete(req.params.id).exec((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.json({
      message: "Deleted succesfully",
      deletedUser,
    });
  });
};


module.exports = {userRegistration, userLogin, getUser, getUsers, getUserByType,updateUser,removeUser};
