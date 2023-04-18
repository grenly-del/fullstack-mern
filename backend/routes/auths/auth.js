const {Router} = require('express')
const router = Router()
const {getLogin, postLogin} = require('../../controllers/auth/loginController')
const {getRegis, postRegis} = require('../../controllers/auth/registerController')
const {middlewareJWT} = require('../../config/authorizationJWT')

router.route('/login')
	.get(getLogin)
	.post(postLogin)

router.route('/register')
	.get(getRegis)
	.post(postRegis)

module.exports = router