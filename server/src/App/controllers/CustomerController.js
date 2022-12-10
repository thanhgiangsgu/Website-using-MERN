const customer = require('../models/Customer')

class Customer {
    index(req, res)
    {
        customer.find({}, function(err, customer) {
            res.json(customer)
             //res.status(400).json({ error: 'ERROR'})
        })
        console.log("Hello");
    }

    getCustomer(req, res)
    {
        
        let a = req.params.id
        customer.findOne({username:a}, function(err, customerr) {
           // xu li 
                res.json(customerr)
           // return check 
        })
    }

    checkLogin(req, res)
    {
        console.log(req.body.email);
        customer.findOne({username:req.body.email}, function(err, customerRelative) {
          try {
            if (customerRelative.password == req.body.password){
                return  res.json({
                      check: "true"
                })
                
            }
            res.json({
                check: "false"
            })
          } catch (err) {
            
            res.json({
                check: "false"
            })
          }
               
        })
    }


    async deleteCustomer(req, res)
    {
        await customer.findOneAndDelete({username:req.params.id})
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

    checkUsername(req, res)
    {
        console.log(req.params.id);
        customer.findOne({username:req.params.id}, function(err, customerRelative) {
          if (customerRelative == null)
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


    addCustomer(req, res)
    {
        const dataCustomer = new customer(req.body)
        try {
             dataCustomer.save()
            res.status(201).json({
                check: "Success",
                data : {
                    dataCustomer
                }
            })
        } catch (error) {
            res.status(500).json({
                check: 'false',
                message: error
            })
        }

        
    }

    async updateCustomer  (req,res)
    {
        const updateCus =  await customer.findOneAndUpdate(
            {username:req.body.username},req.body,{
                new : true
              }
        )
        try {
            res.status(200).json({
                status : 'Success',
                data : {
                    updateCus
                }
              })
        } catch (error) {
            console.log(error)
        }
        console.log(req.body);
    }


    getDataUser(req, res)
    {
        customer.findOne({username:req.params.id}, function(err, customerRelative) {
           res.json(customerRelative)
        })
    }
}




module.exports = new Customer