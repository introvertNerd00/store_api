const Product = require("../models/products")


const getProducts = async (req, res) => {
    const {name,company,featured} = req.query
    const queryObject = {}
    if(name){  
        queryObject.name = {$regex:name,$options:'i'}
    }
    if(company){
        queryObject.company = company
    }  
    if(featured){
        queryObject.featured = featured

    }

    const products = await Product.find(queryObject)
    res.status(200).json({products})
}

const getProductsTesting = async (req, res) => {
    const products = await Product.find(req.query)
    res.status(200).json({products})
}

module.exports = {getProducts, getProductsTesting}