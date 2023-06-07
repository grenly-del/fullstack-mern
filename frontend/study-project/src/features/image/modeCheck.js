import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const stateAwal = {
	mode: true
}

const modeSlice = createSlice({
	name: "mode",
	initialState: stateAwal,
	reducers: {
		update: (state, action) => {
			state.mode= action.payload
		}
	}
})



export const{update} = modeSlice.actions
export default modeSlice.reducer