// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() 
{
    try {
        await mongoose.connect('mongodb://localhost/mern_econ_dev');
        console.log("thanh cong");
    } catch ( error ) {
        console.log("That bai");
    }
}

// Using ES6 imports


module.exports = { connect }