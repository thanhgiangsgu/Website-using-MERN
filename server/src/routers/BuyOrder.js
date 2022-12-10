var express = require('express')
const router = express.Router()

const buyorder = require('../App/controllers/BuyOrderController')


 router.post('/check-buyorder/:id', buyorder.checkBuyOrder)
 router.delete('/delete-buyorder/:id', buyorder.deleteBuyOrder)
// router.patch('/update-size', size.updateSize)
 router.post('/add-buyorder', buyorder.addBuyOrder)
 

router.use('/', buyorder.index)



module.exports = router