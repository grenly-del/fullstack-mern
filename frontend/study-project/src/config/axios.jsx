import axios from 'axios'

const authAxois = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
})


export default authAxois