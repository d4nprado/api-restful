const ProductsModel = require('../models/products')

const ProductControllers = {}

ProductControllers.get = async (req, res) => {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

module.exports = ProductControllers