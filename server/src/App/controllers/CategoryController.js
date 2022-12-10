const category = require('../models/Category')

class Category {
    index(req, res)
    {
        category.find({}, function(err, category) {
            res.json(category)
             //res.status(400).json({ error: 'ERROR'})
        })
        console.log("hl");
    }

    getCategory(req, res)
    {
        
        let a = req.params.id
        category.findOne({category_id:a}, function(err, categoryRelative) {
           // xu li 
                res.json(categoryRelative)
           // return check 
        })
    }

    


    async deleteCategory(req, res)
    {
        await category.findOneAndDelete({category_id:req.params.id})
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

    checkId(req, res)
    {
        console.log(req.params.id);
        category.findOne({category_id:req.params.id}, function(err, categoryRelative) {
          if (categoryRelative == null)
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


    addCategory(req, res)
    {
        const dataCategory = new category(req.body)
        try {
            dataCategory.save()
            res.status(201).json({
                check: "Success",
                data : {
                    dataCategory
                }
            })
        } catch (error) {
            res.status(500).json({
                check: 'false',
                message: error
            })
        }

        
    }

    async updateCategory  (req,res)
    {
        const updateCat =  await category.findOneAndUpdate(
            {category_id:req.body.category_id},req.body,{
                new : true
              }
        )
        try {
            res.status(200).json({
                status : 'Success',
                data : {
                    updateCat
                }
              })
        } catch (error) {
            console.log(error)
        }
        console.log(req.body);
    }
}




module.exports = new Category