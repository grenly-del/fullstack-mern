import {createSlice} from '@reduxjs/toolkit'


const authSlice = createSlice({
	name: "auth",
	initialState: {
		username: "Grantly Sorongan",
		email: "grantly@gmail.com",
		password: "grantly12"
	},
	reducers: {
		update: (state, action) => {
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.password = action.payload.password;
		}
	}
})



export const{update} = authSlice.actions
export default authSlice.reducer