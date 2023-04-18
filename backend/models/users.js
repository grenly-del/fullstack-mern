const {model, Schema} = require('mongoose')


const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {

		type: String,
		required: true
	}
}, {timestamps: true})


// MELAKUKAN VALIDASI SEBELUM DATA DI SIMPAN DI DATABASES (	username / email yang dimasukan sudah terdaftar )
userSchema.post('save', (err, doc, next) => { 

	if( err.name == 'MongoServerError' && err.code === 11000 ) {
		let key = Object.getOwnPropertyNames(err.keyValue)
		console.log(key[0])
		next(new Error(`${key[0]} yang anda masukan sudah ada`))
	} else {
		next()
	}
})


module.exports = model('user', userSchema)