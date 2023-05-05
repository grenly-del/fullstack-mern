const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
	token: {
		type: String,
		required: true
	},
	userID: {
		type: mongoose.ObjectId,
		required: true
	}
})

module.exports = mongoose.model('token', tokenSchema)