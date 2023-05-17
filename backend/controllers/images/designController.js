module.exports = {
	postDesignController: (req, res, next) => {

			const image = req.files
			
			if( !image ) {
					console.log('upload file gagal')
			}else {
				res.json({message: 'berhasil', image: image})
			}


	}
}