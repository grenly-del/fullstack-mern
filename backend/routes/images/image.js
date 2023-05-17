const {Router} = require('express')
const router = Router()
const authJWT = require('../../config/authorizationJWT')
const User = require('../../models/users')
const TokenJWT = require('../../models/token')
const Image = require('../../models/token')
const upload = require('../../config/multerConfig')
const myPhotosRoutes = require('./myphotos')
const aestheticRoutes = require('./aesthetic')
const designRoutes = require('./design')
const randomRoutes = require('./random')
const multerError = require('../../errorHandling/multerError')


router.get('/', async (req, res) => {
		

		const urlImage = `${req.protocol}://${req.get('host')}/image/myphotos`
		res.send('hu')
		
})


router.use('/myphoto', upload.array('images', 10), myPhotosRoutes)
router.use('/aesthetic', upload.array('images', 10), aestheticRoutes)
router.use('/design', upload.array('images', 10), designRoutes)
router.use('/random', upload.array('images', 10), randomRoutes)


// ======= MiddleWare =======

// =========  Error Handling Multer  ==========
router.use(multerError)


module.exports = router

