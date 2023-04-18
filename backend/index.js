
// ====== DEKLARASI =======
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


// ==== KONEKSI KE DATABASE ====
mongoose.connect(process.env.URL_DATABASES).then(data => console.log('Database berhasil terkonek')).catch(err => console.log(err))


// ====== ROUTE =======
const app = express()


// ==== MIDDLEWARE ====
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const authRoute = require('./routes/auths/auth.js')
const imageRoute = require('./routes/images/image')
app.get('/', (req, res) => {
	res.send({message: 'message'})
})

// ====== ROUTER AUTHENTIKASI =======
app.use('/auth', authRoute)
app.use('/image', imageRoute)

app.use('*', (req, res) => {
	res.send('Halaman tidak di temukan')
})


app.listen(process.env.WEBSITE_PORT, () => {
	console.log(`Website berhasil berjalan di http://localhost:${process.env.WEBSITE_PORT}`)
})