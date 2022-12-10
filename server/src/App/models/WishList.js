const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WishList = new Schema({
    product_id: String, 
    product_name: String, 
    product_img1: String,
    product_price: Number,
    product_amount: Number,
})

module.exports = mongoose.model('wishlist', WishList)