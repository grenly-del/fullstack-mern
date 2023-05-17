import React from 'react'
import List from '../list/'
import {cekToken, cekUserId} from '../../../config/cekToken'
import SelectComp from '../select'

import './style.css'


const Components = () => {
		return (
		<div className="container-design">
			<main className="content">
				<h2>Design</h2>
				<SelectComp type="design" />
				<div className="content-image">
					<div className="col">
						<img src="/foto/foto1.jpg" />
					</div>
					<div className="col">
						<img src="/foto/foto11.jpg" />
					</div>
					<div className="col">
						<img src="/foto/foto3.jpg" />
					</div>
					<div className="col">
						<img src="/foto/foto4.jpg" />
					</div>
					<div className="col">
						<img src="/foto/foto5.jpg" />
					</div>
					<div className="col">
						<img src="/foto/foto6.jpg" />
					</div>
					<div className="col">
						<img src="/foto/foto7.jpg" />
					</div>
					<div className="col">
						<img src="/foto/foto8.jpg" />
					</div>
					<div className="col">
						<img src="/foto/foto9.jpg" />
					</div>
					<div className="col">
						<img src="/foto/foto10.jpg" />
					</div>
				</div>
			</main>
		</div>
		)
}

const Design = () => {


	const token = cekToken()
	const userId = cekUserId()

	if(token && userId) {
		return <Components />
	}else {
		window.location.href = "/"
	}
}






export default Design