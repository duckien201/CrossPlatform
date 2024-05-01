const express = require('express')
const  orderController  = require( "../controllers/OrderController");
const router = express.Router()

router.post("/order", orderController.register);
module.exports = router