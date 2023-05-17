import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Cookies from 'js-cookie'

// ===== STYLE =====
import './style.css'

const ListImage = () => {

	return (
		<div className="container-list">
			<ul>
				<li><NavLink to="myphoto">My Photos</NavLink></li>
				<li><NavLink to="aesthetic">Aesthetic</NavLink></li>
				<li><NavLink to="design">Design</NavLink></li>
				<li><NavLink to="random">Random</NavLink></li>
			</ul>
		</div>
	)
}


export default ListImage