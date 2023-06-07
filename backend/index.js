
// ====== DEKLARASI =======
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookie = require('cookie-parser')
const authJWT = require('./config/authorizationJWT')


// ==== KONEKSI KE DATABASE ====
const dbConnection = require('./db.js')
dbConnection()


// ====== ROUTE =======
const app = express()


// ==== MIDDLEWARE ====
app.use(cookie())
app.use(cors({
  origin: '*'
}));


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


const authRoute = require('./routes/auths/auth.js')
const imageRoute = require('./routes/images/image')
app.get('/', (req, res) => {
	res.send({message: 'message'})
})

// ====== ROUTER AUTHENTIKASI =======
app.use('/auth', authRoute)
app.use('/api/image', authJWT,imageRoute)


app.use('*', (req, res) => {
	res.send('Halaman tidak di temukan')
})


app.listen(process.env.WEBSITE_PORT, () => {
	console.log(`Website berhasil berjalan di http://localhost:${process.env.WEBSITE_PORT}`)
})