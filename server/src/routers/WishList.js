var express = require('express')
const router = express.Router()

const wishlist = require('../App/controllers/WishListController')

router.post('/add-wishlist',wishlist.addWishList)
router.delete('/delete-wishlist/:id', wishlist.deleteWishList)
router.post('/check-wishlist/:id' , wishlist.checkWishList)
router.use('/', wishlist.index)



module.exports = router