const express = require('express')
const router = express.Router()
const {postDesignController, getDesignController ,delDesignController} = require('../../../controllers/images/designController')
const multer = require('multer')
const sharpFilMiddleware = require('../../../config/sharpConfig')


router.route('/')
	.post(sharpFilMiddleware, postDesignController)
	.get(getDesignController)
router.route('/:id')
	.delete(delDesignController)






module.exports = router