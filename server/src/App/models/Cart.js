const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema({
    product_id: String, 
    product_name: String, 
    product_img1: String,
    product_price: Number,
    product_amount: Number,
    product_tmp_amount: Number,
    
})

module.exports = mongoose.model('cart', Cart)