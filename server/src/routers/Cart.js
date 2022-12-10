var express = require('express')
const router = express.Router()

const cart = require('../App/controllers/CartController')

router.post('/add-cart',cart.addCart)
router.delete('/delete-cart/:id', cart.deleteCart)
router.patch('/update-cart', cart.updateCart)
router.post('/check-cart/:id' , cart.checkCart)
router.get('/check-all-cart', cart.checkAllCart)
router.delete('/delete-all-cart', cart.deleteAll)
router.use('/', cart.index)



module.exports = router