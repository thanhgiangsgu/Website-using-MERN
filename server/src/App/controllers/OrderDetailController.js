const { response } = require('express')
const order_detail = require('../models/OrderDetail')
const product = require('../models/Product')
const order = require('../models/Order')

class OrderDetail {
    index(req, res) {
        console.log("zp");
        order_detail.find({}, function (err, order_detail) {

            res.json(order_detail)

            // res.status(400).json({ error: 'ERROR'})
        })

    }


    getOrderDetail(req, res) {
        console.log(req.params.id);
        order_detail.find({ order_id: req.params.id }, function (err, orderDetailRelative) {
            res.json(orderDetailRelative)
        })
    }


     addOrderDetail(req, res) {
        const dataOD = new order_detail(req.body)
        const dataProduct = product.findOne({product_id:req.body.product_id}).then(productItem => {
            productItem.product_amount -= req.body.product_amount
            productItem.save()
        })
        
        dataOD.save();

    }


    async deleteProductByOrderId(req, res) {
        // await order_detail.deleteMany({ order_id: req.params.id })
        // res.json("Yoo")

        console.log("deleteProductByOrderId");
        console.log(req.params.id);
        await order_detail.find({ order_id: req.params.id }).then(data => {
            data.forEach(dataItem => {
                product.findOne({ product_id: dataItem.product_id }).then(productItem => {
                    productItem.product_amount += dataItem.product_amount
                    productItem.save()
                })
            })
        })

        await order_detail.deleteMany({ order_id: req.params.id })
        await order.findOneAndDelete({ order_id: req.params.id })
        res.json("Yoo")

    }


    async getOverView(req, res) {
        let idOrder = "";
        var data = {
            index_order: 0,
            product_sold: 0,
            total_revenue: 0,
            product_stock: 0,
        }

        // order_detail.find.then({

        // })
        // res.json(data)

        await order_detail.find().then(listOrderDetail => {
            listOrderDetail.map(OrderDetailItem => {
                if (idOrder != OrderDetailItem.order_id) {
                    data.index_order += 1
                    idOrder = OrderDetailItem.order_id
                    console.log(OrderDetailItem.order_id);
                }
                data.product_sold += OrderDetailItem.product_amount
                data.total_revenue += OrderDetailItem.od_into_money

            })
        }
        )

        await product.find().then(products => {
            products.map(productItem => {
                data.product_stock += productItem.product_amount
            })
        })

        res.json(data)
    }





}

module.exports = new OrderDetail