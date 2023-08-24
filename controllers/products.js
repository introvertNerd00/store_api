const Product = require("../models/products")


const getProducts = async (req, res) => {
    const products = await Product.find(req.query)
    res.status(200).json({products})
}

const getProductsTesting = async (req, res) => {
    const products = await Product.find(req.query)
    res.status(200).json({products})
}

module.exports = {getProducts, getProductsTesting}