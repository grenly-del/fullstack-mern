const express = require('express')
const router = express.Router()
const {postAestheticController} = require('../../../controllers/images/aestheticController')
const multer = require('multer')


router.route('/')
	.post(postAestheticController)







module.exports = router