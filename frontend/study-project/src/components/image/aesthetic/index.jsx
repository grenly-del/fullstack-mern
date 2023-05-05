import React from 'react'
import List from '../list/'
import {cekToken, cekUserId} from '../../../config/cekToken'

import './style.css'


const ComponentsAesthetic = () => {
		return (
		<div className="container-astetik">
			<main className="content">
				<h2>Aesthetic</h2>
			</main>
		</div>
		)
}

const Aesthetic = () => {


	const token = cekToken()
	const userId = cekUserId()

	if(token && userId) {
		return <ComponentsAesthetic />
	}else {
		window.location.href = "/"
	}
}






export default Aesthetic