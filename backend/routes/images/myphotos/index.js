const express = require('express')
const router = express.Router()
const {postMyPhotoController, getMyPhotoController} = require('../../../controllers/images/myphotocontroller')
const multer = require('multer')
const sharpFilMiddleware = require('../../../config/sharpConfig')


router.route('/')
	.post(sharpFilMiddleware, postMyPhotoController)
	.get(getMyPhotoController)






module.exports = router