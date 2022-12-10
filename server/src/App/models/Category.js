const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema({
    category_id: {type: String, unique: true}, 
    category_name: String,
    
})

module.exports = mongoose.model('categorys', Category)