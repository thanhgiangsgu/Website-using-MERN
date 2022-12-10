const order = require('./Order')
const account = require('./Account')
const customer = require('./Customer')
const category = require('./Category')
const buyorder = require('./BuyOrder')
const product = require('./Product')
const order_detail = require('./OrderDetail')
const cart = require('./Cart')
const wishlist = require ('./WishList')

function route(app)
{

    app.use('/order', order)
    
    app.use('/account', account)

    app.use('/customer', customer)

    app.use('/category', category)

    app.use('/buyorder', buyorder)

    app.use('/product', product)

    app.use('/orderdetail', order_detail)

    app.use('/cart', cart)

    app.use('/wishlist', wishlist)
}


module.exports = route