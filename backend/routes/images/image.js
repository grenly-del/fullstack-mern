const {Router} = require('express')
const router = Router()
const authJWT = require('../../config/authorizationJWT')
const User = require('../../models/users')

router.get('/', authJWT, async (req, res) => {
	const user = req.user

	// ==== AMBIL DATA DENGAN ID USER ====
	console.log(user)
	const data = await User.findOne({_id: user.userId})


	res.status(200).json({
		message: 'berhasil',
		user: data
	})
})


module.exports = router

