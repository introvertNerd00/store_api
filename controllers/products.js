const Product = require("../models/products")


const getProducts = async (req, res) => {
    const {name,company,featured,sort,select} = req.query
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
    let apiData = Product.find(queryObject)

    if(sort){
        let sortList = sort.split(',').join(' ')
        apiData = apiData.sort(sortList)

    }

    if(select){
        let selectList = select.split(',').join(' ')
        apiData = apiData.select(selectList)

    }

    const products = await apiData
    res.status(200).json({products})
}

const getProductsTesting = async (req, res) => {
    const products = await Product.find(req.query)
    res.status(200).json({products})
}

module.exports = {getProducts, getProductsTesting}