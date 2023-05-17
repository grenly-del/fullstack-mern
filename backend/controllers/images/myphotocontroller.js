const path = require('path')
const Image = require('../../models/images')
const fs = require('fs')
const mongooseError = require('../../errorHandling/mongoose')


module.exports = {
	postMyPhotoController: async (req, res, next) => {
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
					            nama: file[0].originalname,
					            urlImage: urlImage,
					            contentType: dataImage.namePath,
					            user: userLog.userId
					          }).save()


					          // =============== MENGAMBIL SEMUA DATA IMAGE DARI DATABASE SESUAI DENGAN HALAMAN ================

					          allImagesData = await Image.find({contentType: dataImage.namePath})



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
	getMyPhotoController: async (req, res) => {
		const baseurl = req.baseUrl;
	    const arr = baseurl.split('/');
	    const namePath = arr[3];
	    let userLog = req.user

	    const imgData = await Image.find({ contentType: namePath, user: userLog.userId });
	    console.log(imgData)
	    if( !imgData ) res.status(200).json({message: 'Halaman masih kosong'})
	    res.status(200).json({ message: 'berhasil', urlImg: imgData });
	}
}