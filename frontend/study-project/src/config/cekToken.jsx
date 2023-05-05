import Cookies from 'js-cookie'

export const cekToken = () => {
	const token = Cookies.get('token')
	return token ? token : false
}


export const cekUserId = () => {
	const userId = localStorage.getItem('userId')
	return userId ? userId : false
}
