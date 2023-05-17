const multer = require('multer')
const upload = multer().array('images', 10)




let multerError = (err, req, res, next) => {

	if( err instanceof multer.MulterError ) {
		console.log(err)
		if( err.code === 'LIMIT_FILE_SIZE' ) {
			res.status(400).json({message: 'Terjadi error di multer', errors: 'File lebih dari 5 MB'})
		}else if( err.code === 'LIMIT_FILE_COUNT' ) {
			res.status(400).json({message: 'Terjadi error di multer', errors: 'Melebihi batas upload (10)'})
		}else {
			res.status(400).json({message: 'Terjadi error di multer', errors: err.message})
		}
		
	}else {
		res.status(500).json({message: 'Terjadi error di server'})
		// next()
	}

}


module.exports = multerError