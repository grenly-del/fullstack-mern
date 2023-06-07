import React from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../../../features/image/promp'


import './style.css'

const Promp = ({message, cls}) => {

	const dispatch = useDispatch()

	const handleSubmit = () => {
		dispatch(add({cls: '', message: ''}))
	}

	return(

		<div className={`container-promp ${cls}`}>
			<div className="content-promp">
				<div className="content">
					<h1>{message}</h1>
					<button className="btn-promp" onClick={handleSubmit}>Ok</button>
				</div>
			</div>
		</div>

	)
}


export default Promp