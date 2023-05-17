const mongooseErr = (err) => {

	if( err.name === 'MongoServerError' ) {
			const errMese = {
				message: 'Terjadi error di database',
				errors: err.message,
				status: 400
			}
			return errMese
		 }else {
		       const errMeseSer = {
		       message: 'Terjadi Error Di Server',
		       errors: err.message,
		       status: 500
		}
		return errMeseSer
	}
}



module.exports = mongooseErr