var express = require('express')
const router = express.Router()

const customer = require('../App/controllers/CustomerController')


router.post('/check-username/:id', customer.checkUsername)
router.delete('/delete-customer/:id', customer.deleteCustomer)
router.patch('/update-customer', customer.updateCustomer)
router.post('/add-customer', customer.addCustomer)
router.get('/get-user/:id', customer.getDataUser)
 

router.use('/', customer.index)



module.exports = router