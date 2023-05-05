import Cookies from 'js-cookie'
import React from 'react'
import {Link} from 'react-router-dom'

const Logout = () => {

	const handleLogout = () => {
		localStorage.removeItem('userId');
		Cookies.remove('token')
		window.location.reload()
	}


	return(
		<button onClick={handleLogout}>Logout</button>
	)
}

export default Logout
