const express = require('express')
const router = express.Router()
const productController = require('../controllers/ProductController');

router.get("/",productController.getAllProducts)
router.post("/",productController.addProduct)
router.get("/",productController.getProductByName)

module.exports = router
