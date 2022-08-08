import { kindOfMessage } from '@customTypes/pokemonCustomTypes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  loading: boolean, 
  showDetails: boolean,

  initialPokedexAnimation: boolean,
  triggerPokedexAnimation: boolean,
  reloadPokedexAnimation: boolean

  showMessage: boolean,
  kindOfMessage: kindOfMessage,
  triggerMessageAnimation: boolean
}

const initialState: initialStateType = {
  loading: false,
  showDetails: false,
  
  initialPokedexAnimation: true,
  triggerPokedexAnimation: false,
  reloadPokedexAnimation: false,

  showMessage: false,
  kindOfMessage: '' as kindOfMessage,
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
    setReloadPokedexAnimation : (state: any, action: PayloadAction<boolean>) => {
      state.reloadPokedexAnimation = action.payload
    },


    //To Show Message to confirm or cancel action
    setShowMessage: (state: any, action: PayloadAction<boolean>) => {
      state.showMessage = action.payload
    },
    setKindOfMessage: (state: any, action: PayloadAction<kindOfMessage>) => {
      state.kindOfMessage = action.payload
    },
    setTriggerMessageAnimation: (state: any, action: PayloadAction<boolean>) => {
      state.triggerMessageAnimation = action.payload
    }
  }
})

export const { 
  setLoading, 
  setShowDetails, 
  
  setInitialPokedexAnimation,
  setTriggerPokedexAnimation,
  setReloadPokedexAnimation,
  
  setShowMessage, 
  setKindOfMessage, 
  setTriggerMessageAnimation } = uiSlice.actions
export default uiSlice.reducer
