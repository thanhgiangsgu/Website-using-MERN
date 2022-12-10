var express = require('express')
const router = express.Router()

const orderdetail = require('../App/controllers/OrderDetailController')

router.get('/get-order-detail/:id',orderdetail.getOrderDetail)
router.post('/add-order-detail', orderdetail.addOrderDetail)
router.delete('/delete-product-by-order-id/:id', orderdetail.deleteProductByOrderId)
router.get('/get-overview', orderdetail.getOverView)
router.use('/', orderdetail.index)

module.exports = router