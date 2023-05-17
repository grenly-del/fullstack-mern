import React, {useEffect} from 'react'
import List from '../../components/image/list'
import Footer from '../../components/image/footer'
import {Outlet, useNavigate } from 'react-router-dom'


// ===== STYLE =====
import './style.css'

const ImagePages = () => {

	const navigate = useNavigate()

	useEffect(() => {
		navigate('myphoto')
	}, [])


	return (
		<main className="container-image">
			<List />
			<Outlet/>
			<Footer />
		</main>
	)
}

export default ImagePages