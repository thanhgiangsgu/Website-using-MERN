const Category = require('../models/Category');
const { find } = require('../models/Order');
const product = require('../models/Product')

class Product {
    index(req, res) {
        product.find().populate("category_id").then(data => {
            return res.json(data);
        })
        console.log("hello");
    }


    checkProduct(req, res) {
        console.log(req.params.id);
        product.findOne({ product_id: req.params.id }, function (err, productRelative) {
            if (productRelative == null) {
                return res.json(
                    { check: 'false' }
                )
            } else
                res.json(
                    { check: 'true' }
                )
        })
    }


    addProduct(req, res) {
        const dataProduct = new product(req.body)
        try {
            dataProduct.save()
            res.status(201).json({
                check: "Success",
                data: {
                    dataProduct
                }
            })
        } catch (error) {
            res.status(500).json({
                check: 'false',
                message: error
            })
        }


    }

    async deleteProduct(req, res) {
        await product.findOneAndDelete({ product_id: req.params.id })
        try {
            res.status(204).json({
                status: 'Success',
                data: {},
            })
        } catch (err) {
            res.status(500).json({
                status: 'Failed',
                message: err
            })
        }
    }

    async updateProduct(req, res) {
        const updatePro = await product.findOneAndUpdate(
            { product_id: req.body.product_id }, req.body, {
            new: true
        }
        )
        try {
            res.status(200).json({
                status: 'Success',
                data: {
                    updatePro
                }
            })
        } catch (error) {
            console.log(error)
        }
        console.log("Hello");
    }



    checkAmountProduct(req, res) {
        product.findOne({ product_id: req.params.id }, function (err, productRelative) {
            try {
                return res.json({
                    amount: productRelative.product_amount,
                    check: "true",
                })
            } catch (err) {
                res.json({
                    check: "false"
                })
            }
        })
    }


    checkAmount(req, res) {

    }


    async updateAmount(req, res) {
        const updatePro = await product.findOneAndUpdate(
            {
                product_id: req.body.product_id
            }, req.body.product_amount, {
            new: true
        }
        )
        try {
            res.status(200).json({
                status: 'Success',
                data: {
                    updatePro
                }
            })
        } catch (error) {
            console.log(error)
        }
        console.log("Hello");
    }

    getDataProductKeyBoard(req, res) {
        console.log("zoo");
        product.find({ category_id: '63626bbbbe8ab35b0b924a6b' }, function (err, productRelative) {
            res.json(productRelative)
        })
    }

    getDataProductKeyboardById(req, res) {
        console.log("getDataProductKeyboardById");
        console.log(req.params.id);
        product.findOne({ product_id: req.params.id }, function (err, productRelative) {
            {
                console.log(productRelative);
                res.json(productRelative)
            }
        })

    }

    getDataProductKeyboardByProductId(req, res) {
        console.log("getDataProductKeyboardByProductId");
        console.log(req.params.id);
        product.findOne({ product_id: req.params.id }, function (err, productRelative) {
            {
                res.json(productRelative)
            }
        })

    }



    getRandomProduct(req, res) {
        const allDataProduct = []
        console.log("getRamdomProduct");


        function randomNumberInRange(min, max) {
            // 👇️ get number between min (inclusive) and max (inclusive)
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function loadRandomProduct(data) {
            const dataProduct = []
            for (var i = 0; i < 3; i++) {
                dataProduct.push(data[randomNumberInRange(0, 8)])
            }
            return dataProduct
        }

        product.find().populate("category_id").then(data => {
            res.json(loadRandomProduct(data))
        })


    }

    async getListProduct(req, res) {
        console.log(req.body);
        const products = await product.find({ product_id: { $in: req.body } })
        res.json(products)
    }


    //2. Tìm sản phẩm theo tên
    //[GET] /product/findbyname?name=
    async findByName(req, res) {
        try {
            console.log(req.query.name)
            await product.find({
                product_name: { $regex: ".*" + req.query.name + ".*" },
            }).then((data) => {
                return res.status(200).json(data);
            });
        } catch (err) {
            return res.status(500).json({ msg: "findByName" + err.message });
        }

        // product.find({ slug: req.query.name }, (error, post) => {
        //     console.log(error, post)
        // });
    }

    async listByPage(req, res) {
        const pageSize = 6
        const page = Number(req.query.pageNumber) || 1

        const keyWord = req.query.keyWord
            ? {
                name: {
                    $regex: req.query.keyWord,
                    $option: 'i',
                },
            } : {}
        const count = await product.countDocuments({ ...keyWord })
        const products = await product.find({ ...keyWord })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
        res.json({ products, page, pages: Math.ceil(count / pageSize) })
    }

}









module.exports = new Product