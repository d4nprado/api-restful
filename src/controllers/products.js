const ProductsModel = require('../models/products')

const ProductControllers = {}

ProductControllers.get = async (req, res) => {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

ProductControllers.post = async (req, res) => {
    const { name, brand, price } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price
    })

    product.save()

    res.send({
        message: 'success'
    })
}

module.exports = ProductControllers