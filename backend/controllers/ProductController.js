const ProductModel = require('../model/ProductModel')
const SearchProductModel = require('../model/SearchModel')
const jwt = require('jsonwebtoken');

exports.getAllProducts = async(req , res, next)=>{
    try{
        const products = await ProductModel.find();
        res.json(products)
    }catch (error){
        return res.status(500).json({
                    message :error
                })
    }
}

exports.getProducts = async(req , res, next)=>{
    try{
        const searchproduct = await SearchProductModel.find();
        res.json(searchproduct)
    }catch (error){
        return res.status(500).json({
                    message :error
                })
    }
}



exports.addProduct = async(req, res,next)=>{
    try{
        const product = new ProductModel(res.body);
        const result = await product.save();
        res.json({
            message :"product added successfully",
            product : result
        })
    }catch(error){
        next(error)
    }
}