import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from '../../config/axios'
import Cookies from 'js-cookie'


// ============ MENGAMBIL DATA BERDASARKAN TYPE (HALAMAN) ============
export const getData = createAsyncThunk("image/getData", async(type) => {

		const token = Cookies.get('token')

		// ======== AMBIL DATA DI DATABASE ( BACKEND ) ==========
      		const res = await axios.get(`/api/image/${type}`, {
		        headers: {
		          Authorization: `bearer ${token}`,
		          'Content-Type': 'multipart/form-data',
		        },
		      });

      			return res.data.urlImg

})



export const saveData = createAsyncThunk("image/saveData", async({images, type}) => {
	 const token = Cookies.get('token');

  const data = await Promise.all(
    images.map(async (list) => {
      const formData = new FormData();
      formData.append('images', list);

      try {
        const res = await axios.post(`/api/image/${type}`, formData, {
          headers: {
            Authorization: `bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        return res.data.urlImg;
      } catch (err) {
        let msgErr = err.response.data.errors

        throw new Error(msgErr)
      }
    })
  );


  const mappedData = data[0].map((item) => {
    return item
  });

 
  return mappedData;
	
})	





export const deleteData = createAsyncThunk("image/deleteData", async({ type, id}) => {
	 const token = Cookies.get('token');

  
       try{



       	 const res = await axios.delete(`/api/image/${type}/${id}`, {
          headers: {
            Authorization: `bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })

       	 return res.data.data

       }catch(err) {

       	console.log(err.message)

       }

      
	
})	



const imageEntity = createEntityAdapter({
	selectId: (image) => {
		return image._id
	}
})

const stateAwal = {
	loading: false,
	error: '',
	data: [],
	getLoading: ''
}

const imageSlice = createSlice({
	name: 'image',
	initialState: imageEntity.getInitialState(stateAwal),
	extraReducers: {
		[getData.fulfilled]: (state, action) => {
			imageEntity.setAll(state, action.payload)
			state.loading = false
			state.getLoading = 'fade-in'
		},
		[getData.pending] : (state, action) => {
			state.loading = true
			state.getLoading = 'fade-in'
		},
		[saveData.fulfilled]: (state, action) => {
			state.loading= false
			console.log(action)
			imageEntity.addMany(state, action.payload)
		},
		[saveData.pending] : (state, action) => {
			state.loading = true
			state.getLoading = 'fade-in'
		},
		[saveData.rejected]: (state, action) => {
			state.errorMessage = action.error.message
			state.loading = false
			state.getLoading = ''
		},
		[deleteData.fulfilled]: (state, action) => {
			imageEntity.removeOne(state, action.payload._id)
		}
	}
})


export const imageSelectors = imageEntity.getSelectors(state => state.image)

export default imageSlice.reducer