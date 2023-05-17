import React, {useState, useEffect} from 'react'
import List from '../list/'
import {cekToken, cekUserId} from '../../../config/cekToken'
import SelectComp from '../select'
import axios from '../../../config/axios'

import './style.css'


const Components = ({data}) => {


		return (
		<div className="container-myphotos">
			<main className="content">
				<h2>My Photos</h2>
				<SelectComp type="myphoto" />
		        {data && data.length > 0 && (
		          <div className="content-image">
		            {data.map((item, index) => (
		              <div className="col" key={index}>
		                <img src={item.urlImage} alt={item.nama} />
		              </div>
		            ))}
		          </div>
		        )}
			</main>
		</div>
		)
}

const MyPhotos = () => {
  const token = cekToken()
  const userId = cekUserId()
  const [data, setData] = useState(null)
  const [errMese, setErrMese] = useState(null)

  function fetchData() {
    axios
      .get("/api/image/myphoto", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.urlImg);
        setData(res.data.urlImg);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {

      fetchData();

    
  }, []);

  if(token && userId) {
    return <Components data={data} fetchData={fetchData} />
  } else {
    window.location.href = "/"
  }
}






export default MyPhotos