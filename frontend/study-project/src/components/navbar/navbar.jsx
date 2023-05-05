import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logout from '../../config/authJWT.jsx'
import Cookies from 'js-cookie'

// ==== STYLE =====
import './navbar.css'

const Navbar = () => {

	const token = Cookies.get('token')
	
	return (

		<header className="header">
			<nav className="navbar">
				<h2>Logo</h2>
				<ul className="menu">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="image">Image</NavLink></li>
					<li><NavLink to="todo">Todo</NavLink></li>
				</ul>
				<div className="auth">
				{token ? <Logout /> : (
				    <>
				      <NavLink to="/auth/login">Login</NavLink>
				      <NavLink to="/auth/register">Register</NavLink>	
				    </>
				  )}
				</div>
			</nav>
		</header>

	)
}

export default Navbar