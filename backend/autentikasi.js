const LocalStrategy = require('passport-local').Strategy
const User = require('./models/users')
const bcrypt = require('bcrypt')


function authentikasi(passport) {


		passport.use(new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password'
			}, async function(email, password, done) {

				console.log(password)


			// CARI / AMBIL DATA BERDASARKAN EMAIL DI DATABASE

			const user = await User.findOne({email: email})
				
			if( !user ) return done(null, false, {message: 'Email yang anda masukan tidak valid'})
				// console.log(user.email)
				// MAPPING ARRAY 

			try{

				// CEK PASSWORD DI DATABASE

				bcrypt.compare(password, user.password, (err, result) => {
					if( result ) {
						done(null, user)
					}else {
						done(null, false, {message: 'Password yang anda masukan salah'})
					}
				})
			}catch(err) {

				return done(err)

			}



			}

		)
	)



	passport.serializeUser((user, cb) => {
		    cb(null, user.id);
	})

	passport.deserializeUser((id, cb) => {

		User.findById(id)
		.exec()
		.then(user => {
			cb(null, user)
		}).catch(err => {
			cb(null, err)
		})

	 })

}


module.exports = authentikasi

