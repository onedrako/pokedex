import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state: any, action: any) => {
      state.loading = action.payload
    }
  }
})

export const { setLoading } = uiSlice.actions
export default uiSlice.reducer
