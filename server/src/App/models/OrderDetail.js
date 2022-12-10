const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderDetail = new Schema({
    // product_id: {type: mongoose.Schema.Types.ObjectId, ref: 'products'},
    product_id: String,
    product_amount: Number,
    od_unit_price: Number,
    od_into_money: Number,
    order_id: String,
})

module.exports = mongoose.model('order_detail', OrderDetail)