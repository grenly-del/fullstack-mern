import {useState} from 'react'
import axios from '../../../config/axios.jsx'
import { useNavigate } from "react-router-dom";

// ==== STYLE ====
import './register.css'

const Register = () => {

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [messege, setMessage] = useState(null)

	const navigate = useNavigate()

	const handleSubmit = async (e)  => {

		e.preventDefault()

		try{

			const res = await axios.post('/auth/register', {
				username: username,
				email: email,
				password: password
			})
			navigate('/auth/login')
			console.log(res)

		}catch(err) {
			setMessage(err.response.data.data)
			console.log(err.response.data.data)
		}
		

	}



	return (
		<div className="register">
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="box">
					<i class="bi bi-people-fill" style={{fontSize: "2.3em", fontWeight: "bold", color: '#675D50'}}></i>
					<h2>REGISTER</h2>
					<div className={`message ${messege ? "error" : ''}`}>{messege}</div>
					<div className="username">
						<label htmlFor="">Username</label>
						<input 
						type="text" 
						name="username" 
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						 />
					</div>
					<div className="email">
						<label htmlFor="">Email</label>
						<input 
						type="text" 
						name="email" 
						id="email" 
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						 />
					</div>
					<div className="password">
						<label htmlFor="">Password</label>
						<input 
						type="password" 
						name="password" 
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						 />
					</div>
					<button>SUBMIT</button>
				</div>
				<div className="content">
					<p>
						Silahkan daftarkan akun anda, dengan memasukan form di atas sesuai dengan label yang di berikan. Setelah anda berhasil register slihakan login.
					</p>
				</div>
			</form>
		</div>
	)
}

export default Register