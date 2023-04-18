const User = require('../../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jsonWebToken = require('../../config/authorizationJWT')

module.exports = {

	getLogin: async (req, res) => {

		// ==== AMBIL SEMUA DATA USER ======
		const user = await User.find({})
		if( !user ) {
			return res.status(401).json({message: 'Data dengan nama user ini tidak terdaftar'})
		}
		res.json({message: 'list data user', user})

	},
	postLogin: async (req, res) => {

		// === MENGAMBIL DATA DARI DATABASE ===
		const {username} = req.body

		// ==== CEK APAKAH NAMA ITU ADA DI DATABASE ======
		const user = await User.findOne({username: username})
		if( user == null) {
			return res.status(401).json({message: 'Data dengan nama user ini tidak terdaftar'})
		}

		console.log(user)

		// ======= MEMBUAT TOKEN ========
		const token = await jwt.sign({userId: user.id, username: username}, process.env.SECRET_KEY, {expiresIn: '1d'})


		res.setHeader('Authorization', 'bearer' + token)

		res.status(200).json({
			message: 'permintaan berhasil',
			user: user.username,
			token: token
		})

	}

}