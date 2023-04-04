const {Schema, model} = require('mongoose')


const imageSchema = Schema({
	path: {
		type: String,
		required: true
	},
	nama: {
		type: String,
		required: false
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
})


module.exports = model('image', imageSchema)