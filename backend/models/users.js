const mongoose = require('mongoose')
const valid = require('validator')


const Schema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: function(v) {
				console.log(valid.isEmail(v))
				return valid.isEmail(v)
			},
			message: props => `${props.value} email ini  tidak valid!`
		}
	},
	password:{
	 	type: String,
	 	required: true
	},
	image: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'image'
	}
})


// MELAKUKAN VALIDASI SEBELUM DATA DI SIMPAN DI DATABASES (	username / email yang dimasukan sudah terdaftar )
Schema.post('save', (err, doc, next) => { 

	if( err.name == 'MongoServerError' && err.code === 11000 ) {
		let key = Object.getOwnPropertyNames(err.keyValue)
		console.log(key[0])
		next(new Error(`${key[0]} yang anda masukan sudah ada`))
	} else {
		next()
	}
})



module.exports = mongoose.model('user', Schema)