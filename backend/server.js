require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoute = require('./routes/usersRoute')
const passport = require('passport')
const autentikasi = require('./config/configAuthentikasi.js')
const flash = require('connect-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const productRoute = require('./routes/productRoute')
const fs = require('fs');
const app = express()



autentikasi(passport)


function telahLogin(req, res, next) {
	let blokir = ['users/login', 'users/register']
	if( req.isAuthenticated() ) {
		return next()
	} 

	res.redirect('/users/login')

}


// INITIALIS PASSPORT
app.use(flash())
app.use(session({
	secret: 'secret-key',
	resave: false,
	saveUninitialized: false,
	cookie: {
		 maxAge: 86400000, // set cookie ke satu hari
		 sameSite: 'strict',
		 secure: false
	}
}))
app.use(methodOverride('_method'))
app.use(passport.initialize())
app.use(passport.session())



// SET DATABASES
let port = process.env.SERVER_PORT
mongoose.connect(process.env.DB_URL).then(() => {
	console.log('Database berhasil terkonek')
}).catch(err => {
	console.log(`Database gagal terkonek dengan error${err}`)
})



// MIDDLEWARE 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.set('view engine', 'ejs')





app.get('/', telahLogin, (req, res) => {
	console.log(req.user)
	res.render('hasil', {username: req.user.username})
})

app.use('/users', userRoute)


app.use('/product', telahLogin, productRoute)

app.use('*', telahLogin, (req, res) => {
	res.send('not found')
})


app.listen(port, (err) => {
	if( err ) console.log(err)
	console.log(`Server berhasil di jalankan di http://localhost:${port}`)
})