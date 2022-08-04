// Redux
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

// Utils
import { api } from '../../utils/axiosConfig'

// Types
import { PokemonWithDetails } from '../../types/pokemonCustomTypes'
import { getTeamFromLocalStorage } from '@utils/manageLocalStorage'
import { useEffect } from 'react'



export const fetchPokemonSearched = createAsyncThunk(
  "pokemonSeacher/fetchPokemonSearched",
  async (pokemon: string, { dispatch }) => {
    const pokemonSearched = pokemon.toString().toLowerCase()
  
    try{
      const pokemon: PokemonWithDetails = await api.get(`pokemon/${pokemonSearched}`).then(res => res.data)
      if(pokemon){
        const userTeam: PokemonWithDetails[] = getTeamFromLocalStorage()
        let pokemonWithDetail: PokemonWithDetails
        if(userTeam.find(member => member.id === pokemon.id)) {
          pokemonWithDetail = { ...pokemon, team: true }
        } else{
          pokemonWithDetail = {...pokemon,team: false,}
        }
        console.log("pokemonWithDetail", pokemonWithDetail)
        dispatch(setPokemonSearched(pokemonWithDetail))
      }
    }catch(error) {
      console.log("error", error)
    }
  }
)

type PokemonSearcherState = {
  pokemonSearched: PokemonWithDetails
}

// state
const initialState: PokemonSearcherState = {
  pokemonSearched: {} as PokemonWithDetails,
}

// slice for pokemonSearcher
export const pokemonSearcherSlice = createSlice({
  name: 'pokemonSearcher',
  initialState,
  reducers: {
    setPokemonSearched: (state: any, action: PayloadAction<PokemonWithDetails>) => {
      state.pokemonSearched = {...action.payload}
    },
  }
})


export const { 
  setPokemonSearched,

} = pokemonSearcherSlice.actions
export default pokemonSearcherSlice.reducer
