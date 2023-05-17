import React from 'react';
import {Link} from 'react-router-dom'

import './style.css'

const Footer = () => {
	return (

		<footer className="container-footer">
			<h1>Snake <span>G</span></h1>
			<div className="content">
				<div className="media">
					<ul>
						<li><Link to="https://wa.me/6289527173365"><i class="bi bi-whatsapp"></i></Link></li>
						<li><Link to="https://web.facebook.com/grantlyedward"><i class="bi bi-facebook"></i></Link></li>
						<li><Link to="https://www.instagram.com/grantly_edward/"><i class="bi bi-instagram"></i></Link></li>
						<li><Link to="https://milto:edwardantonio1313@gmail.com/"><i class="bi bi-envelope"></i></Link></li>
					</ul>
				</div>
				<div className="link">
					<p>snakeeys070@gmail.com</p>
					<p>082187199940</p>
					<p>@grantly_edward</p>
				</div>
				<p className="copyright">CopyRight <span>SnakeG 2023</span></p>
			</div>

		</footer>

	)
}


export default Footer