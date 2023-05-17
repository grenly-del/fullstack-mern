const express = require('express')
const router = express.Router()
const {postDesignController} = require('../../../controllers/images/designController')
const multer = require('multer')


router.route('/')
	.post(postDesignController)







module.exports = router