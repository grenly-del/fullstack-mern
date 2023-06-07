import React, {useState, useEffect} from 'react'
import List from '../list/'
import {cekToken, cekUserId} from '../../../config/cekToken'
import SelectComp from '../select'
import axios from '../../../config/axios'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getData, imageSelectors, deleteData} from '../../../features/image/imageSlice'



import './style.css'


const Components = ({data, error}) => {

    const mode = useSelector((state => state.mode))
    const [develop, setDevelop] = useState()
    const dispatch = useDispatch()
    const [images, setImages] = useState('')
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
		<div className="container-myphotos">
			<main className="content">
				<h2>My Photos</h2>
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
            {loading && <div class="spinner-border" role="status"><span class="sr-only"></span></div>}
              <SelectComp type="myphoto" />
              {images && images.length > 0 && (
                <div className={`content-image ${getLoading} develop`}>
                  {images.map((item, index) => (
                    <div className="col" key={item._id}>
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

const MyPhotos = () => {
  const token = cekToken()
  const userId = cekUserId()
  const [errMese, setErrMese] = useState(null)
  const dispatch = useDispatch()
  const image = useSelector(imageSelectors.selectAll)



  useEffect (() => {

  // ====== MENGAMBIL DATA ======
   dispatch(getData('myphoto'))
    
  }, [dispatch]);

  

  if(token && userId) {
    return <Components data={image} error={errMese}/>
  } else {
    window.location.href = "/"
  }
}





export default MyPhotos