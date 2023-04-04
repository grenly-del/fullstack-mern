const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = require('../config/configFileUpload')
const {getProduct,  postProduct, putProduct, middlewareErrorMulter, middlewareErrorMulter2} = require('../controllers/productControllers/productController')



router.get('/', getProduct)


router.post('/', upload.single('image'), postProduct)

router.put('/', upload.array('images', 10), putProduct)


// middleware error handling multer
router.use(middlewareErrorMulter)

router.use(middlewareErrorMulter2)


module.exports = router