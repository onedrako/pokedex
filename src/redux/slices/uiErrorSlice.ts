import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  maxPokemonError: boolean
  pokemonAlreadyInTeamError: boolean
}

const initialState: initialStateType = {
  maxPokemonError: false,
  pokemonAlreadyInTeamError: false
}

export const uiErrorSlice = createSlice({
  name: 'uiError',
  initialState,
  reducers: {
    setMaxPokemonError: (state: any, action: PayloadAction<boolean>) => {
      state.maxPokemonError = action.payload
    },
    setPokemonAlreadyInTeamError: (state: any, action: PayloadAction<boolean>) => {
      state.pokemonAlreadyInTeamError = action.payload
    }
  }
})

export const { setMaxPokemonError, setPokemonAlreadyInTeamError } = uiErrorSlice.actions
export default uiErrorSlice.reducer
