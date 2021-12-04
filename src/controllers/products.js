const ProductsModel = require('../models/products')

const ProductControllers = {}

ProductControllers.get = async (req, res) => {
    const products = await ProductsModel.find()
    
    res.send(products)
}

module.exports = ProductControllers