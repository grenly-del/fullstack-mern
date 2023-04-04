const multer = require('multer')
const path = require('path')

// === CONFIGURASI PENYIMPANAN FILE ===
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  	let dr = path.join(__dirname, '../public', 'uploads')
    cb(null, dr)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname
    cb(null, `${file.fieldname}-${uniqueSuffix}`)
  }
})


function filterFile (req, file, cb) {
	const format = ['image/png', 'image/jpg', 'image/jpeg']
	if( format.includes(file.mimetype) ) {
		cb(null, true) // TYPE / FORMAT VALID
	}else {
		cb(new Error('Format yang anda masukan tidak valid'))
	}
}

const upload = multer({ storage: storage, fileFilter: filterFile })

module.exports = upload