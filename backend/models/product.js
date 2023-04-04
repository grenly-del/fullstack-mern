const {Schema, model} = require('mongoose')
// const User = require('./users')


const productSchema = Schema({
	nama: {
		type: String,
		required: true
	},
	umur: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		required: true
	}
})


module.exports = model('product', productSchema)