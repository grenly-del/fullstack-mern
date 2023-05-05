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
	postRegis: async (req, res) => {
		const { username, email, password } = req.body;
		console.log(req.body.username)

			try {
			  // HASH PASSWORD DENGAN BCRYPT
			  const passwordHash = await bcrypt.hash(password, 10);

			  if (!passwordHash) throw new Error('password gagal di hash');

			  // SIMPAN DATA KE DATABASE
			  const user = await new User({
			    username: username,
			    email: email,
			    password: passwordHash
			  }).save();

			  res.json({
			    message: 'User berhasil di buat',
			    data: user
			  });
			} catch (err) {
			  console.log(err.errors);

			  res.status(401).json({
			    message: 'User gagal di tambahkan',
			    data: err.message
			  });
			}
					



	}

}