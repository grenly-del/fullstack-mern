const path = require('path')
const Image = require('../../models/images')
const fs = require('fs')
const mongooseError = require('../../errorHandling/mongoose')


module.exports = {
  postRandomController: async (req, res) => {
    const uploadedImages = req.files;

    let allImagesData

    if (!uploadedImages) {
      console.log('Upload file gagal');
    } else {

    	

    		let dataImage = req.newImage
		    	console.log(dataImage)

		    	let file = dataImage.img




		          // ============== MEMBUAT URL UNTUK IMAGE ===============
		          let urlImage = `${req.protocol}://${req.get('host')}/images/${dataImage.namePath}/${file[0].filename}`


		          try{

				          // ============== MENYIMPAN DATA IMAGE KE DATABASE ===============
				   
				          const imgData = await new Image({
				            nama: file[0].originalname,
				            urlImage: urlImage,
				            contentType: dataImage.namePath,
				          }).save()


				          // =============== MENGAMBIL SEMUA DATA IMAGE DARI DATABASE SESUAI DENGAN HALAMAN ================

				          allImagesData = await Image.find({contentType: dataImage.namePath})

				          if( !allImagesData ) res.status(200).json({message: 'Halaman masih kosong'})

				      res.status(200).json({
				        message: 'berhasil',
				        urlImg: allImagesData,
				      })

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

  getRandomController: async (req, res) => {
    const baseurl = req.baseUrl;
    const arr = baseurl.split('/');
    const namePath = arr[3];

    const imgData = await Image.find({ contentType: namePath });

    if(!imgData) res.status(200).json({message: 'Halaman masih kosong'})

    res.status(200).json({ message: 'berhasil', urlImg: imgData });
  },
};
