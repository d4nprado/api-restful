const router = require('express').Router()

const ProductControllers = require('../controllers/products')

router.get('/products/:id?', ProductControllers.get)
router.post('/products', ProductControllers.post)
router.put('/products/:id', ProductControllers.put)
router.delete('/products/:id', ProductControllers.remove)

module.exports = router