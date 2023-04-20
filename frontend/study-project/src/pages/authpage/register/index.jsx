import React from 'react'
import Right from '../../../components/home/right/rightside'
import RegisterComp from '../../../components/auth/register/'

import './register.css'

const RegisterPage = () => {
	return (
		<div className="container">
			<RegisterComp />
			<Right />
		</div>
	)
}


export default RegisterPage