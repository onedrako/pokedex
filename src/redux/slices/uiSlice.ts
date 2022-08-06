import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  loading: boolean, 
  showDetails: boolean,
  initialPokedexAnimation: boolean,
  triggerPokedexAnimation: boolean,
}

const initialState: initialStateType = {
  loading: false,
  showDetails: false,
  initialPokedexAnimation: true,
  triggerPokedexAnimation: false,
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
    },
    setInitialPokedexAnimation: (state: any, action: PayloadAction<boolean>) => {
      state.initialPokedexAnimation = action.payload
    },
    setTriggerPokedexAnimation: (state: any, action: PayloadAction<boolean>) => {
      state.triggerPokedexAnimation = action.payload
    }
  }
})

export const { setLoading, setShowDetails, setInitialPokedexAnimation,setTriggerPokedexAnimation } = uiSlice.actions
export default uiSlice.reducer
