import React, {useState} from 'react'
import Cookies from 'js-cookie'
import axios from '../../../config/axios'

import './style.css'


const Select = ({type}) => {

	const [images, setImages] = useState(null)
	const [imgname, setImgName] = useState(null)


	const handleFileChange = (e) => {
		e.preventDefault()
		const pilihFile = Array.from(e.target.files)
		setImgName(e.target.files.name)
		setImages(pilihFile)
	}

	const handleSaveImage = async () => {
  if (!images) {
    return alert('Upload Image Terlebih Dahulu');
  } else {
    const token = Cookies.get('token')
    images.map(async (image) => {
    	console.log(image)
      const formData = new FormData();
      formData.append('images', image);
      
      try{

      		const res = await axios.post(`/api/image/${type}`, formData, {
		        headers: {
		          Authorization: `bearer ${token}`,
		          'Content-Type': 'multipart/form-data',
		        },
		      });

      		console.log(res)
      }catch(err) {
      	console.log(err)
      	if( err ) alert(err.response.data.errors)
      }

    });
  }
};


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