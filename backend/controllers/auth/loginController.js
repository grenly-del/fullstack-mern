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

		// === MENGAMBIL DATA DARI INPUTAN ===
		const { email, password} = req.body



		// ==== CEK APAKAH EMAIL ITU ADA DI DATABASE ======
		const user = await User.findOne({email: email})
		if( user == null) {
			return res.status(401).json({message: 'Data dengan nama user ini tidak terdaftar'})
		}

		// ======= CEK PASSWORD =======
		const passValid = await bcrypt.compare(password, user.password)
		
		if( !passValid ) {
			return res.status(400).json({message: 'password anda salah', status: false})
		}


		console.log(user)

		// ======= MEMBUAT TOKEN ========
		const token = await jwt.sign({userId: user.id, username: user.username}, process.env.SECRET_KEY, {expiresIn: '1d'})


		console.log(token)

		res.status(200).json({
			message: 'permintaan berhasil',
			userID: user.id,
			token: token
		})

	}

}