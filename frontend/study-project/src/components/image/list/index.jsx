import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux';
import {update} from '../../../features/image/modeCheck'

// ===== STYLE =====
import './style.css'

const ListImage = () => {

	const [isChecked, setIsChecked] = useState(false)
	const dispatch = useDispatch()

	const handleChecked = (e) => {
		setIsChecked(!isChecked)
		dispatch(update(isChecked))
	}


	return (
		<div className="container-list">
			<ul>
				<li><NavLink to="myphoto">My Photos</NavLink></li>
				<li><NavLink to="aesthetic">Aesthetic</NavLink></li>
				<li><NavLink to="design">Design</NavLink></li>
				<li><NavLink to="random">Random</NavLink></li>
			</ul>
			<div className="mode-container">
			    <label class="checkbox-container">
				  <input 
				  type="checkbox"
				  checked={isChecked}
				  onChange={handleChecked} />
				  <span class="checkmark"></span>
				  Mode Develop
				</label>
			</div>
		</div>
	)
}


export default ListImage