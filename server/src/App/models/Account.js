const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Account = new Schema({
    username: {type: String, unique: true},
    password: String, 
    decen: Number,
    status: Number,
})

module.exports = mongoose.model('accounts', Account) 