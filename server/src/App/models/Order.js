const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema({
    order_id: String,
    customer_id: {type: mongoose.Schema.Types.ObjectId, ref: 'customers'}, 
    order_date: String, 
    order_address: String,
    order_phone: String,
    order_method:String, 
    order_status: String,
    order_note: String, 
    order_total_price: Number,
}, {
    timestamps: true
})

module.exports = mongoose.model('order', Order)