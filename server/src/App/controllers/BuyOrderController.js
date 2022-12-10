const buyorder = require('../models/BuyOrder')

class BuyOrder {
    index(req, res)
    {
        buyorder.find({}, function(err, buyorder) {
            res.json(buyorder)
             //res.status(400).json({ error: 'ERROR'})
        })
    }

    getSize(req, res)
    {
        
        let a = req.params.id
        size.findOne({size_id:a}, function(err, sizeRelative) {
           // xu li 
                res.json(sizeRelative)
           // return check 
        })
    }

    


    async deleteBuyOrder(req, res)
    {
        await buyorder.findOneAndDelete({buyorder_id:req.params.id})
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

    checkBuyOrder(req, res)
    {
        console.log(req.params.id);
        buyorder.findOne({buyorder_id:req.params.id}, function(err, buyOrderRelative) {
          if (buyOrderRelative == null)
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


    addBuyOrder(req, res)
    {
        const dataBuyOrder = new buyorder(req.body)
        try {
            dataBuyOrder.save()
            res.status(201).json({
                check: "Success",
                data : {
                    dataBuyOrder
                }
            })
        } catch (error) {
            res.status(500).json({
                check: 'false',
                message: error
            })
        }

        
    }

    async updateSize  (req,res)
    {
        const updateSiz =  await size.findOneAndUpdate(
            {size_id:req.body.size_id},req.body,{
                new : true
              }
        )
        try {
            res.status(200).json({
                status : 'Success',
                data : {
                    updateSiz
                }
              })
        } catch (error) {
            console.log(error)
        }
        console.log(req.body);
    }
}




module.exports = new BuyOrder