import { createSlice } from '@reduxjs/toolkit';


const stateAwal = {
	cls: '',
	message: ''
}


const prompSlice = createSlice({
	name: 'promp',
	initialState: stateAwal,
	reducers: {
		add: (state, action) => {
			console.log(action.payload)
			state.cls = action.payload.cls
			state.message = action.payload.msg
		}
	}
})


export const{add} = prompSlice.actions
export default prompSlice.reducer