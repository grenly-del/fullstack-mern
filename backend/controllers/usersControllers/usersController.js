const User = require('../../models/users.js')
const passport = require('passport')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// GenereteToken
function genereteToken(user) {
		let token = jwt.sign({userId: user.id, email: user.email}, process.env.SECRET_KEY, { expiresIn: '1d' })
		return token
}


module.exports = {

	getRegister: (req, res) => {
	
			res.render('index.ejs', {message: ''})
	},
	postRegister: (req, res) => {
			let email = req.body.email
			let password = req.body.password
			let username = req.body.username



			// CEK JIKA EMAIL ITU VALID

			if( !validator.isEmail(email) ) {

				return res.render('popup')

			}
			


				// HASHING PASSWORD DAN SIMPAN KE DATABASE
				bcrypt.hash(password, 10, async (err, pass) => {
					if( err ) res.status(401).json({message: 'gagal menyimpan data',  error: err})
					const user = await new User({
						username: username,
						email: email,
						password: pass
					})


					// CEK APAKAH PROSES SIMPAN DATA KE DATABASE BARHASIL DAN MELAKUKAN VALIDASI DATABASE
					try	{
						req.username = username
						await user.validate()
						await user.save()
						res.status(300).redirect('/users/login')

					}catch(err) {

						res.status(500).render('index', {message: err.message})
						console.log(err)

					}
					
				})


			

		},
		getLogin: (req, res) => {
	
			res.render('login', {messages: req.flash()})

		},
		postLogin: (req, res) => {
			res.send('hi')
		},
		deleteDelete: (req, res) => {
			 	req.logout(function(err) {
		    	if (err) return next(err);
		    	res.redirect('/users/login')
			})
		}

}