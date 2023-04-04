const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/users.js')
const router = express.Router()
const passport = require('passport')
const validator = require('validator')
const {getRegister, postRegister, getLogin, deleteDelete, postLogin} = require('../controllers/usersControllers/usersController.js')





// MENYIMPAN DATA KE DATABASES
router.get('/register', getRegister)


router.post('/register', postRegister)



router.get('/login', getLogin)


router.post('/login',  passport.authenticate('local',{ successRedirect: '/', failureRedirect: '/users/salah', failureFlash: true }), postLogin)


router.delete('/delete', deleteDelete)



module.exports = router