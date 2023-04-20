import React from 'react'


// ==== STYLE ====
import './register.css'

const Register = () => {
	return(

		<div className="register">
			<form action="">
				<div className="box">
					<h2>REGISTER</h2>
					<div className="username">
						<label htmlFor="">Username</label>
						<input type="text" name="username" id="username" />
					</div>
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

export default Register