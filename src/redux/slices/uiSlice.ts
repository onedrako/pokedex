import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  loading: boolean, 
  showDetails: boolean,
}

const initialState: initialStateType = {
  loading: false,
  showDetails: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state: any, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setShowDetails: (state: any, action: PayloadAction<boolean>) => {
      state.showDetails = action.payload
    }
  }
})

export const { setLoading, setShowDetails } = uiSlice.actions
export default uiSlice.reducer
