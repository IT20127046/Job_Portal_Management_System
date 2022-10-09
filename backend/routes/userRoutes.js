const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controllers/userController");
const multer = require("multer");

// userRegistration
UserRouter.post("/user/registration", UserController.userRegistration);

// userLogin
UserRouter.post("/user/login", UserController.userLogin);

// GetAll
UserRouter.get("/users", UserController.getUsers);

// Get By ID
UserRouter.get("/user/:id", UserController.getUser);

//get users by type - admin
UserRouter.get("/users/:type", UserController.getUserByType);

// Update User
UserRouter.put("/user/update/:id", UserController.updateUser);

// Delete User
UserRouter.delete("/user/delete/:id", UserController.removeUser);

UserRouter.put("/profile/:id", UserController.updateProfile);

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//update photo

UserRouter.put("/photo/:id", upload.single("file"), UserController.updatePhoto);

// update password
UserRouter.put("/user/updateprofile/:id", UserController.updatepassword);

module.exports = UserRouter;
