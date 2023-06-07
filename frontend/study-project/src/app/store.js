import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import modeSlice from '../features/image/modeCheck'
import prompSlice from '../features/image/promp'
import imageSlice from '../features/image/imageSlice'


export const store = configureStore({
  reducer: {
    auth: authSlice,
    mode: modeSlice,
    image: imageSlice,
    promp: prompSlice
  },
})