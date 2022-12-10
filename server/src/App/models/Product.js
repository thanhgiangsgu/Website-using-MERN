const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    product_id: {type: String, unique: true},
    category_id: {type: mongoose.Schema.Types.ObjectId, ref: 'categorys'}, 
    product_name: String,
    product_price: Number,
    product_status: Number,
    product_detail: String,
    product_img1: String,
    product_amount: {type: Number, default: 0},
})

module.exports = mongoose.model('products', Product) 