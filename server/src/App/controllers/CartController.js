const cart = require('../models/Cart')

class Cart {
    index(req, res)
    {
        cart.find({}, function(err, cart) {
            res.json(cart)
             //res.status(400).json({ error: 'ERROR'})
        })
    }


    addCart(req, res)
    {
        console.log("hello");
        const dataCart = new cart(req.body)
        console.log(dataCart);
        try {
            dataCart.save()
            res.status(201).json({
                check: "Success",
                data : {
                    dataCart
                }
            })
        } catch (error) {
            res.status(500).json({
                check: 'false',
                message: error
            })
        }
    }

    async updateCart(req, res)
    {
        const updateCart =  await cart.findOneAndUpdate(
            {product_id:req.body.product_id},req.body,{
                new : true
              }
        )
        try {
            res.status(200).json({
                status : 'Success',
                data : {
                    updateCart
                }
              })
        } catch (error) {
            console.log(error)
        }
        
    }

    async deleteCart(req, res)
    {
        console.log();
        await cart.findOneAndDelete({product_id:req.params.id})
        try
        {
            res.status(204).json({
                status: 'Success',
                data: {},
            })
        } catch(err)
        {
            res.status(500).json({
                status: 'Failed',
                message : err
            })
        }
    }
    checkCart(req, res)
    {
        cart.findOne({product_id:req.params.id}, function(err, cartRelative) {
          if (cartRelative == null)
          {
            return res.json(
                {check: 'false'}
            )
          } else 
          res.json(
            {check: 'true'}
        )   
        })
    }
    checkAllCart(req, res)
    {
        cart.findOne({}, function(err, cart) {
            res.json(cart)
        })

    }

    async deleteAll(req,res) 
    {
        await cart.deleteMany().then(function(){
            res.json("Yoo")
        })
    }
}




module.exports = new Cart