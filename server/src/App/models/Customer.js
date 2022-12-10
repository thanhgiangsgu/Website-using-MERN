const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema({
    username: {type: String, unique: true}, 
    customer_name: String,
    customer_address: String,
    customer_phone: String,
})

module.exports = mongoose.model('customers', Customer)