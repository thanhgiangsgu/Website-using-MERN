var express = require('express')
const router = express.Router()

const order = require('../App/controllers/OrderController')


router.get('/get-last-data' , order.getLastData)
router.post('/add-order', order.addOrder)
router.use('/check-order/:id',order.getOrder)
router.delete('/delete-order-by-id/:id', order.deleteOrderByOrderId)
router.patch('/update-order', order.updateOrder)

router.use('/', order.index)





module.exports = router