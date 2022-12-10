var express = require('express')
const router = express.Router()

const product = require('../App/controllers/ProductController')
 

router.post('/check-product/:id', product.checkProduct)
router.post('/add-product', product.addProduct)
router.delete('/delete-product/:id', product.deleteProduct)
router.patch('/update-product', product.updateProduct)
router.post('/check-amount-product/:id', product.checkAmountProduct)
router.patch('/update-amount', product.updateAmount)
router.get('/product-keyboard', product.getDataProductKeyBoard)
router.get('/get-product-by-id/:id', product.getDataProductKeyboardById)
router.get('/get-product-by-product-id/:id', product.getDataProductKeyboardByProductId)
router.get('/product-random', product.getRandomProduct)
router.post('/get-list-product', product.getListProduct)
router.get("/findbyname", product.findByName);
router.get('/pagination',product.listByPage);

router.use('/', product.index);
 
 

module.exports = router 