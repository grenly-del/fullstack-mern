const express = require('express')
const router = express.Router()
const {postRandomController, getRandomController} = require('../../../controllers/images/randomController')
const multer = require('multer')
const sharpFilMiddleware = require('../../../config/sharpConfig')



router.route('/')
	.post(sharpFilMiddleware, postRandomController)
	.get(getRandomController)






module.exports = router