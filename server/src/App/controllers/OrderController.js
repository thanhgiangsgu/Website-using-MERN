const { response } = require('express')
const order = require('../models/Order')
const order_detail = require('../models/OrderDetail')

class Order {
    index(req, res) {
        console.log("index");
        order.find().populate("customer_id").then(listOrder => {
            order_detail.find().then(listOrderDetail => {
                listOrder.forEach(orderCreated => {
                    const listDetails = listOrderDetail.filter(detail => detail.order_id == orderCreated.order_id)
                    orderCreated.set('listDetails', listDetails, { strict: false })
                });
                return res.json(listOrder)
            })
        })
    }

    getOrder(req, res) {
        order.find({ customer_id: req.params.id.trim() }).populate("customer_id").then(listOrder => {
            order_detail.find().populate("product_id").then(listOrderDetail => {
                listOrder.forEach(orderCreated => {
                    const listDetails = listOrderDetail.filter(detail => detail.order_id == orderCreated.order_id)
                    orderCreated.set('listDetails', listDetails, { strict: false })
                });
                return res.json(listOrder)
            })
        })
    }

    getOrderDetail(req, res) {
        console.log(req.params.id);
        order_detail.find({ id: req.params.id }, function (err, accountRelative) {
            res.json(accountRelative)
        })
    }

    async getLastData(req, res) {

        let checkMax = 0;
        order.find({}, function (err, orderRelative) {
            if (!err) {

                orderRelative.forEach((order) => {

                    let tmp = order.order_id
                    let arr = tmp.split("_")
                    if (checkMax < arr[1]) checkMax = arr[1]

                }

                )
                res.json("dh_" + Number(Number(checkMax) + 1))
            }
        }
        )
    }


    addOrder(req, res) {
        console.log("addOrder");
        const dataOrder = new order(req.body)
        try {
            dataOrder.save()
            res.status(201).json({
                check: "Success",
                data: {
                    dataOrder
                }
            })
        } catch (error) {
            res.status(500).json({
                check: 'false',
                message: error
            })
        }


    }

    deleteOrderByOrderId(req, res) {
        console.log("DeleteOrderById");
        order.findOneAndDelete({ order_id: req.params.id }, function (err, productRelative) {
            res.json(productRelative)
        })
    }

    async updateOrder(req, res){
        const updateOrder = await order.findOneAndUpdate(
            { order_id: req.body.order_id }, req.body, {
            new: true
        }
        )
        try {
            res.status(200).json({ 
                status: 'Success',
                data: {
                    updateOrder
                }
            })
        } catch (error) {
            console.log(error)
        }
    }


}

module.exports = new Order