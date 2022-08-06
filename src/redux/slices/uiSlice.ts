import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  loading: boolean, 
  showDetails: boolean,
  initialPokedexAnimation: boolean,
  triggerPokedexAnimation: boolean,

  showMessage: boolean,
  triggerMessageAnimation: boolean
}

const initialState: initialStateType = {
  loading: false,
  showDetails: false,
  initialPokedexAnimation: true,
  triggerPokedexAnimation: false,

  showMessage: false,
  triggerMessageAnimation: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    //Show Skeletons
    setLoading: (state: any, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },

    //Show Pokemon Details
    setShowDetails: (state: any, action: PayloadAction<boolean>) => {
      state.showDetails = action.payload
    },

    //Pokemon Animation
    setInitialPokedexAnimation: (state: any, action: PayloadAction<boolean>) => {
      state.initialPokedexAnimation = action.payload
    },
    setTriggerPokedexAnimation: (state: any, action: PayloadAction<boolean>) => {
      state.triggerPokedexAnimation = action.payload
    },

    //To Show Message to confirm or cancel action
    setShowMessage: (state: any, action: PayloadAction<boolean>) => {
      state.showMessage = action.payload
    },
    setTriggerMessageAnimation: (state: any, action: PayloadAction<boolean>) => {
      state.triggerMessageAnimation = action.payload
    }
  }
})

export const { setLoading, setShowDetails, setInitialPokedexAnimation,setTriggerPokedexAnimation, setShowMessage, setTriggerMessageAnimation } = uiSlice.actions
export default uiSlice.reducer
