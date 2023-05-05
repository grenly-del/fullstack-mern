const {Router} = require('express')
const router = Router()
const authJWT = require('../../config/authorizationJWT')
const User = require('../../models/users')
const TokenJWT = require('../../models/token')

router.get('/', authJWT, async (req, res) => {
	

	const token = await TokenJWT.findOne({}).select('token -_id')


	res.setHeader('Authorization', 'bearer' + token.token)


	res.status(200).json({
		message: 'berhasil',
		user: token
	})
})


module.exports = router

