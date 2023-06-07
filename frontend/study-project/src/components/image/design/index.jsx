import React, {useState, useEffect} from 'react'
import List from '../list/'
import {cekToken, cekUserId} from '../../../config/cekToken'
import SelectComp from '../select'
import axios from '../../../config/axios'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getData, imageSelectors, deleteData} from '../../../features/image/imageSlice'


import './style.css'


const ComponentsDesign = ({data}) => {

		const mode = useSelector((state => state.mode))
	    const [develop, setDevelop] = useState()
	    const dispatch = useDispatch()
	    const [images, setImages] = useState(data)
	    const {loading, getLoading} = useSelector(state => state.image)


	  useEffect(() => {
	    setDevelop(mode.mode)
	  }, [mode])

	  useEffect(() => {
	    setImages(data)
	  }, [data])



	  const handleDelete = async ({type, id}) => {
	  	console.log(type, id)
		   let newData =  await dispatch(deleteData({type, id}))
		   if( images.length > 0 ) {
		     setImages('')
		   }
		   setImages(newData.payload)
	  }


		return (
		<div className="container-design">
			<main className="content">
				<h2>Design</h2>
				{develop ? (
		            <>
		            {loading && <div class="spinner-border" role="status"><span class="sr-only"></span></div>}
		              {images && images.length > 0 && (
		                <div className={`content-image ${getLoading} develop`}>
		                  {images.map((item, index) => (
		                    <div className="col" key={index}>
		                      <img src={item.urlImage} alt={item.nama} />
		                    </div>
		                  ))}
		                </div>
		              )}
		            </>
		          ) : (
		            <>
		            {loading && <div class="spinner-border" role="status">loading..<span class="sr-only"></span></div>}
		              <SelectComp type="design" />
		              {images && images.length > 0 && (
		                <div className={`content-image ${getLoading} develop`} >
		                  {images.map((item, index) => (
		                    <div className="col .develop" key={index}>
		                      <img src={item.urlImage} alt={item.nama} />
		                      <button className="btn-del" onClick={() => handleDelete({type: item.contentType, id: item._id})}><i class="bi bi-trash3"></i></button>
		                      
		                    </div>
		                  ))}
		                </div>
		              )}
		            </>
          		)}

			</main>
		</div>
		)
}

const Design = () => {


	const token = cekToken()
  const userId = cekUserId()
  // const [errMese, setErrMese] = useState(null)
  const dispatch = useDispatch()
  const image = useSelector(imageSelectors.selectAll)

  useEffect (() => {

   dispatch(getData('design'))
    
  }, [dispatch]);

  

  if(token && userId) {
    return <ComponentsDesign data={image} />
  } else {
    window.location.href = "/"
  }
}






export default Design