const mongoose = require('mongoose')

module.exports = () => {
	mongoose.connect(process.env.URL_DATABASES).then(data => console.log('Database berhasil terkonek')).catch(err => console.log(err))
}