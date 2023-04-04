import React from 'react'
import './navbar.css'


function Navbar () {

	return (

		<header className="header">

			<h2 className="logo">Lo<span>go</span></h2>
			<ul className="list-menu">
				<li><a href="/">Home</a></li>
				<li><a href="/image">image</a></li>
				<li><a href="/todo">todo list</a></li>
			</ul>	
			<div className="auth">
				<a href="#">Login</a>
				<a href="#">Register</a>
			</div>
		</header>	

	)
}




export default Navbar