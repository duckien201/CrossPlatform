const ProductModel = require('../model/ProductModel')
const jwt = require('jsonwebtoken');

exports.getAllProducts = async(req , res, next)=>{
    try{
        const products = await ProductModel.find();
        if(products.length === 0){
            return res.status(404).json({
                message :'không tìm thấy sản phẩm nào'
            })
        }else{
            return res.status(200).json({
                message :'lấy sản phẩm thành công',
                datas :products
            })
        }
        // res.json(products)
    }catch(error){
        return res.status(500).json({
            message :error
        })
    }

}

exports.getProductByName = async(req , res, next)=>{
    try{
        const products = await ProductModel.find();
        if(!products){
            return res.status(404).json({
                message :'không tìm thấy sản phẩm nào'
            })
        }else{
            return res.status(200).json({
                message :'lấy sản phẩm thành công',
                datas :products
            })
        }
        // res.json(products)
    }catch(error){
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