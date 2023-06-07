const express = require('express')
const router = express.Router()
const {postAestheticController, getAestheticController, delAestheticController} = require('../../../controllers/images/aestheticController')
const multer = require('multer')
const sharpFilMiddleware = require('../../../config/sharpConfig')


router.route('/')
	.post(sharpFilMiddleware, postAestheticController)
	.get(getAestheticController)

router.route('/:id')
	.delete(delAestheticController)




module.exports = router