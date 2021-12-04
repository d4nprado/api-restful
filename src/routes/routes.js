const router = require('express').Router()

const ProductControllers = require('../controllers/products')

router.get('/products', ProductControllers.get)
//router.get('/products', ProductControllers.post)
//router.get('/products/:id', ProductControllers.put)
//router.get('/products/:id', ProductControllers.delete)

module.exports = router