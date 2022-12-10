const wishlist = require('../models/WishList')

class WishList {
    index(req, res)
    {
        wishlist.find({}, function(err, wishlist) {
            res.json(wishlist)
             //res.status(400).json({ error: 'ERROR'})
        })
    }


    addWishList(req, res)
    {
        console.log("hello");
        const dataWishList = new wishlist(req.body)
        console.log(dataWishList);
        try {
            dataWishList.save()
            res.status(201).json({
                check: "Success",
                data : {
                    dataWishList
                }
            })
        } catch (error) {
            res.status(500).json({
                check: 'false',
                message: error
            })
        }
    }

   

    async deleteWishList(req, res)
    {
        console.log();
        await wishlist.findOneAndDelete({product_id:req.params.id})
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

    checkWishList(req, res)
    {
        wishlist.findOne({product_id:req.params.id}, function(err, wishlistRelative) {
          if (wishlistRelative == null)
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


    
}




module.exports = new WishList