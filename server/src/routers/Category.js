var express = require('express')
const router = express.Router()

const category = require('../App/controllers/CategoryController')


router.post('/check-category/:id', category.checkId)
router.delete('/delete-category/:id', category.deleteCategory)
router.patch('/update-category', category.updateCategory)
router.post('/add-category', category.addCategory)
 

router.use('/', category.index)



module.exports = router