import React, {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import axios from '../../../config/axios.jsx'
import { useNavigate } from "react-router-dom";


// ==== STYLE ====
import './login.css'

const Login = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)
	const [err, setErr] = useState('')
	const navigate = useNavigate()




	const handleSubmit = async (e) => {
		e.preventDefault()


		try{

			const res = await axios.post('/auth/login', {
				email: email,
				password: password
			})

			// ==== BUAT COOKIE TOKEN JWT ====
			Cookies.set('token', res.data.token, {expires: 7})

			// ==== BUAT LOCALSTORAGE USERID =====
			localStorage.setItem('userId', res.data.userID)
			navigate('/')
			window.location.reload()

		}catch(err) {
			setError(err.response.data.message)
		}


	}


	return(
		<div className="login">
			<form onSubmit={handleSubmit}>
				<div className="box">
					<i class="bi bi-people" style={{fontSize: "2.3em", fontWeight: "bold", color: '#675D50'}}></i>
					<h2>LOGIN</h2>
				
					<div className={`message ${error ? "error" : ''}`}>{error}</div>	
					<div className="email">
						<label>Email</label>
						<input 
						type="email" 
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						 />
					</div>
					<div className="password">
						<label>Password</label>
						<input 
						type="password" 
						name="password" 
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						 />
					</div>
					<button type="submit">SUBMIT</button>
				</div>
				<div className="content">
					<p>Ini adalah website yang saya buat untuk, project awal saya, fiture yang di berikan di website ini adalah Gallery, Todo, dan untuk menggunakan fiture tersebut anda diharuskan untuk login terlebih dahulu. dengan Email, dan password yang telah di daftarkan. Jika belum terdaftar silahkan daftarkan dulu, di halaman register.</p>
				</div>
			</form>
		</div>

	)
}

export default Login