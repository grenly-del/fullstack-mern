const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
	originalName: {
		type: String,
		required: true,
		unique: false
	},
	newName: {
		type: String,
		required: true,
	},
	urlImage: {
		type: String,
		required: true
	},
	contentType: {
		type: String,
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	}
})


// ============= ERROR HANDLING MONGOOSE ============

// Menambahkan hook post pada 'save' untuk menangani validasi unique
// ImageSchema.post('save', function(error, doc, next) {
// 	console.log(doc)
//   if (error.name === 'MongoServerError' && error.code === 11000) {
//     next(new Error('Silahkan masukkan gambar lain!!'));
//   } else {
//     next(error);
//   }
// });


// ================  HANDLING JIKA IMAGE SAMA DALAM CONTENTTYPE YANG SAMA DAN USER YANG SAMA =================

ImageSchema.pre('save', async function(next) {
  const dataType = await this.model('image').find({ contentType: this.get('contentType'), originalName: this.get('originalName'), user: this.get('user') }).select('nama -_id').exec(); // MENGAMBIL DATA DENGAN CONTENT TYPE YANG SAMA NAMA YANG SAMA DAN USER YANG SAMA
  console.log(`ini adalah isi contentType : ${this.get('contentType')}`)
  let allData = await this.model('image').find({}).select('nama -_id').exec()
  console.log(`ini adalah isi dataType : ${dataType}`)
  if (dataType.length > 0) {
    console.log('nama image sama');
    console.log(`ini adalah isi this : ${this.get('nama')}`)
    next(new Error('Image Sudah ada'));
  } else {
  	console.log(`ini adalah isi 3 this : ${this}`)
  	next()
  }
});

module.exports = mongoose.model('image', ImageSchema)