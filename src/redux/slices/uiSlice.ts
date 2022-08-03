import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  loading: boolean, 
}


const initialState: initialStateType = {
  loading: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state: any, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  }
})

export const { setLoading } = uiSlice.actions
export default uiSlice.reducer
