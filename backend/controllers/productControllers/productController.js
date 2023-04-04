const multer = require('multer');
const User = require('../../models/users.js');
const Image = require('../../models/images');

module.exports = {

		getProduct: (req, res) => {
			res.render('product')
		},
		postProduct: async (req, res) => {


			let file = req.file
			


			// Find user berdasarkan id

			// let user = User.findById({_id: req.user.id})

			console.log(req.user.id)


			// Tambah Image ke database dan mengisi field user dengan id user yang login 
			let image = new Image({
				path: file.path,
				nama: req.user.username,
				user: req.user.id
			}).save()


			// MENGAMBIL DATA DENGAN FILED USER YANG DIISI DENGAN DATA USER ID YANG LOGIN
			let findImage =  await Image.find({user: req.user.id }).populate('user')
			console.log(findImage)

			res.status(200).json(findImage)
			

		},
		putProduct: (req, res) => {
		  if (req.files.length === 0) {
		      res.status(403).json({ message: 'File tidak ditemukan', status: false  })
		  }else {
		    res.status(200).json({ message: req.files, status: true })
		  }
		},
		middlewareErrorMulter: (err, req, res, next) => {
			  // Jika error belum dihandle
			  if (!req.handledMulterError) {
			    if (err instanceof multer.MulterError) {
			      res.status(400).json({ message: 'error', status: false })
			    } else {
			      console.log(err)
			      req.errMulter = err.message
			      req.handledMulterError = true // Set flag
			      next(err.message)
			    }
			  } else {
			    next(err) // Lanjutkan ke middleware berikutnya jika error belum dihandle
			  }
		},
		middlewareErrorMulter2: (err, req, res, next) => {
		  console.log(err)
		  if (err && !req.handledMulterError) { // Jika error belum dihandle
		    return res.status(403).json({ message: err, status: false })
		  } else {
		    next(err) // Lanjutkan ke middleware berikutnya jika error belum dihandle
		  }
		}

}