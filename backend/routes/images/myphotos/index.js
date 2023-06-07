const express = require('express')
const router = express.Router()
const {postMyPhotoController, getMyPhotoController, delMyPhotoController} = require('../../../controllers/images/myphotocontroller')
const sharpFilMiddleware = require('../../../config/sharpConfig')


router.route('/')
	.post(sharpFilMiddleware, postMyPhotoController)
	.get(getMyPhotoController)
router.route('/:id')
	.delete(delMyPhotoController)





module.exports = router