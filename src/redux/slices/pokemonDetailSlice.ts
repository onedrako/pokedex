// Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Types
import { PokemonWithDetails } from '../../types/pokemonCustomTypes'

type PokemonState = {
  pokemon: PokemonWithDetails, 
}

// state
const initialState: PokemonState = {
  pokemon: {} as PokemonWithDetails,
}

// slice for pokemon Detail
export const pokemonSliceDetail = createSlice({
  name: 'pokemonDetail',
  initialState,
  reducers: {
    setPokemonDetail: (state: any, action: PayloadAction<PokemonWithDetails>) => {
      state.pokemon = action.payload
    },
  }
})

export const { setPokemonDetail } = pokemonSliceDetail.actions
export default pokemonSliceDetail.reducer
