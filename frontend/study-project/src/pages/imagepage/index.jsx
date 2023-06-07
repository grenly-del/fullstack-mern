import React, {useEffect} from 'react'
import List from '../../components/image/list'
import Footer from '../../components/image/footer'
import {Outlet, useNavigate, useParams } from 'react-router-dom'
import Promp from '../../components/image/promp'
import { useSelector } from 'react-redux';


// ===== STYLE =====
import './style.css'

const ImagePages = () => {

	const navigate = useNavigate()
	const params = useParams()
	const {message, cls} = useSelector(state => state.promp)

	useEffect(() => {
		navigate('myphoto')
	}, [])


	return (
		<main className="container-image">
			<List />
			<Promp message={message} cls={cls} />
			<Outlet/>
			<Footer />
		</main>
	)
}

export default ImagePages