const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Size = new Schema({
    buyorder_id: {type: String, unique: true}, 
    product_id: String, 
    product_amount: Number,
    buyorder_date: String,

})

module.exports = mongoose.model('buyorder', Size)