import React, {useEffect} from 'react'
import List from '../../components/image/list'
import {Outlet, useNavigate } from 'react-router-dom'


// ===== STYLE =====
import './style.css'

const ImagePages = () => {

	const navigate = useNavigate()

	useEffect(() => {
		navigate('aesthetic')
	}, [])


	return (
		<main className="container-image">
			<List />
			<Outlet/>
		</main>
	)
}

export default ImagePages