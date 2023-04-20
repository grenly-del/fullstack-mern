import React from 'react'


// ==== STYLE ====
import './login.css'

const Login = () => {
	return(

		<div className="login">
			<form action="">
				<div className="box">
					<h2>LOGIN</h2>
					<div className="email">
						<label htmlFor="">Email</label>
						<input type="email" name="email" id="email" />
					</div>
					<div className="password">
						<label htmlFor="">Password</label>
						<input type="text" name="password" id="password" />
					</div>
					<button type="submit">SUBMIT</button>
				</div>
				<div className="content">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Voluptatibus aperiam sunt ullam hic enim perspiciatis ea modi quam fugiat laboriosam expedita asperiores pariatur accusamus labore facilis debitis veniam optio, doloribus!
					</p>
				</div>
			</form>
		</div>

	)
}

export default Login