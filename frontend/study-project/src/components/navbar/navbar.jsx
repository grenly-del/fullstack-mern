import React from 'react'

// ==== STYLE =====
import './navbar.css'

const Navbar = () => {
	return (

		<header className="header">
			<nav className="navbar">
				<h2>Logo</h2>
				<ul className="menu">
					<li><a href="#">Home</a></li>
					<li><a href="#">image</a></li>
				</ul>
				<div className="auth">
					<a href="#">Login</a>
					<a href="#">Register</a>	
				</div>
			</nav>
		</header>

	)
}

export default Navbar