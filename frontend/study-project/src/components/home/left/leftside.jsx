import React from 'react'
import {useSelector} from 'react-redux'

// ==== STYLE ====
import './leftside.css'

const LeftPage = () => {

	const {username} = useSelector(state => state.auth)


	return (
		<div className="left">
			<div className="box">
				<h2>Welcome To My Website</h2>
				<h1>This is Website Gallery And Todolist</h1>
				<p>Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Doloremque placeat quidem vel modi fugit blanditiis omnis autem a sit accusamus!
				</p>
				<button>Click For Details</button>
			</div>
		</div>
	)
}


export default LeftPage