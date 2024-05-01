const express = require('express')
const  userController  = require( "../controllers/UserController.js");
const router = express.Router()

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/reset_password", userController.resetPassword);
router.post("/change_password", userController.changePassword);


module.exports = router