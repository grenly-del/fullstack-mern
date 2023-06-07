const path = require('path')
const Image = require('../../models/images')
const fs = require('fs')
const mongooseError = require('../../errorHandling/mongoose')

module.exports = {
	postAestheticController: async (req, res, next) => {
	 const uploadedImages = req.files;

	    let allImagesData

	    if (!uploadedImages) {
	      console.log('Upload file gagal');
	    } else {

	    	

	    		let dataImage = req.newImage
			    	console.log(dataImage)

			    	let file = dataImage.img

			    	let userLog = req.user



			          // ============== MEMBUAT URL UNTUK IMAGE ===============
			          let urlImage = `${req.protocol}://${req.get('host')}/images/${dataImage.namePath}/${file[0].filename}`


			          try{

					          // ============== MENYIMPAN DATA IMAGE KE DATABASE ===============
					   
					          const imgData = await new Image({
					            originalName: file[0].originalname,
					            newName: file[0].filename,
					            urlImage: urlImage,
					            contentType: dataImage.namePath,
					            user: userLog.userId
					          }).save()


					          // =============== MENGAMBIL SEMUA DATA IMAGE DARI DATABASE SESUAI DENGAN HALAMAN DAN USER YANG LOGIN ================

					          allImagesData = await Image.find({contentType: dataImage.namePath, user: userLog.userId})



					      res.status(200).json({
					        message: 'berhasil',
					        urlImg: allImagesData,
					      });

			          }catch(err) {
			          		
			          		let message = mongooseError(err)
			          		console.log(err.message)

			          		fs.unlink(dataImage.newPath, (err) => {
			          			if( err ) console.log(err)
			          		})

			          		res.status(message.status).json({
			          			message: message.message,
			          			errors: message.errors
			          		})
			          }
	   
	    	
	    }

	},
	getAestheticController: async (req, res) => {
		const baseurl = req.baseUrl;
	    const arr = baseurl.split('/');
	    const namePath = arr[3];
	    let userLog = req.user

	    const imgData = await Image.find({ contentType: namePath, user: userLog.userId });
	    console.log(imgData)
	    if( !imgData ) res.status(200).json({message: 'Halaman masih kosong'})
	    res.status(200).json({ message: 'berhasil', urlImg: imgData });
	},
	delAestheticController: async (req, res) => {
		const {id} = req.params
		const baseUrl = req.baseUrl
		const userLog = req.user.userId
		
		// ======== AMBIL DATA YANG DIBUTHKAN DARI CLIENT =========
		let baseurl = baseUrl.split('/')
		let type = baseurl[3]

		const dest = path.join('public/images', type)

		try{

					// ======== Delete Data Sesuai Dengan ID dan Type Image nama user =========
				let delData = await Image.findOneAndDelete({_id: id, contentType: type, user: userLog}).exec()
				
				let newPathDel = path.join(dest, delData.newName)

				// ======== HAPUS IMAGE DARI FILE =======
				fs.unlink(newPathDel, (err) => {
					if( err ) console.log(err)
				})

				// ======== AMBIL SEMUA DATA YANG DI DATABASE berdasarkan TYPE dan USER YANG LOGIN ========
				let newImage = await Image.find({contentType: type, user: userLog})
				
				res.status(200).json({
					data: newImage,
					message: 'sukses'
				})

		}catch(err) {

			console.log(err.message)
			res.send('err')

		}

	}
}