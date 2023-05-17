const multer = require('multer')
const path = require('path')


const store = multer.diskStorage({
	destination: (req, file, cb) => {
		const url = req.baseUrl
		const arr = url.split('/')
		cb(null, `public/images`)
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`)
	}
})

const upload = multer({
	storage: store,
	limits: {
		fileSize: 5000000 // Max 5MB
	},
	fileFilter: (req, file, cb) => {
		 if (!file.mimetype.includes("image")) {
		      
		      	const error = new Error('Type image tidak valid')
				error.code = 'LIMIT_FILE_TYPES'
				return cb(error, false)

		   	}
		   		return cb(null, true);
		}
			
})


module.exports = upload

