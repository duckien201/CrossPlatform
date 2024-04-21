const express = require('express')
const  userController  = require( "../controllers/UserController.js");
const router = express.Router()

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/reset-password", userController.resetPassword);


module.exports = router