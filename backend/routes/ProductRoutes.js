const express = require('express')
const router = express.Router()
const productController = require('../controllers/ProductController');

router.get("/getAllProducts",productController.getAllProducts)
router.post("/",productController.addProduct)

module.exports = router
