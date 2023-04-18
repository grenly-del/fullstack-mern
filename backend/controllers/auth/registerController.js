const User = require('../../models/users')
const bcrypt = require('bcrypt')


module.exports = {

	getRegis: async (req, res) => {

		// ==== Mengambil semua data users di database ===

		const users = await User.find({})
		console.log(users)
		res.json({
			message: 'data berhasil di ambil',
			data: users
		})
	},
	postRegis: (req, res) => {
		const {username, email, password} = req.body


		// ====== HASH PASSWORD DENGAN BCRYPT =======

		bcrypt.genSalt(10, (err, salt) => {
			if(err) console.log('salt gagal di dapatkan')
			bcrypt.hash(password, salt, async (err, hash) => {
				if( err ) console.log('password gagal di hash')


					try{

						// SIMPAN DATA KE DATABASE
						const user = await new User({
							username: username, 
							email: email, 
							password: hash
						})
						.save()
						res.json({
							message: 'user post berhasil di buat',
							data: user
						})

					}catch(err) {
						console.log(err.errors)

						res.json({
							message: 'user post berhasil di buat',
							data: err.message
						})

					}
					



					

			})
		})



	}

}