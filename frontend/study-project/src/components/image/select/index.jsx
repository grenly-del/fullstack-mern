import React, {useState} from 'react'
import Cookies from 'js-cookie'
import axios from '../../../config/axios'
import {useDispatch, useSelector} from 'react-redux'
import {saveData, imageSelectors} from '../../../features/image/imageSlice'
import {add} from '../../../features/image/promp'


import './style.css'


const Select = ({type}) => {

	const [images, setImages] = useState(null)
	const [imgname, setImgName] = useState(null)
	const dispatch = useDispatch()
	const message = useSelector((state) => state.image.errorMessage)
	const [errMessage, setErrMessage] = useState(undefined)

	const handleFileChange = (e) => {
		e.preventDefault()
		const pilihFile = Array.from(e.target.files)
		setImgName(e.target.files.name)
		setImages(pilihFile)
	}

	const handleSaveImage = async () => {
  if (!images) {
    return alert('Upload Image Terlebih Dahulu');
  }else {

  	
  		try{


  			let data = await dispatch(saveData({images, type}))
  			let msgErr = data.error.message
	  		if( !data.error.message ) {
	  			console.log('sukses')

	  		}else {
  					dispatch(add({cls: 'active', msg: data.error.message}))
	  		}

  		}catch(err) {

  			console.log(err)	
  			window.location.reload()

  		}

  		

  }
}


	return (
		<div className="input-image">
				<div className="input">
					<input 
					id="img"
					type="file"
					onChange={handleFileChange}
					accept="image/*" 
					multiple
					title="Upload your image"
					placeholder="Kirim Image"
					max="10" />
					<label htmlFor="img">Kirim Gambar</label>
				</div>
				<button onClick={handleSaveImage}><i class="bi bi-box-arrow-in-right"></i></button>
				
		</div>
	)
}


export default Select