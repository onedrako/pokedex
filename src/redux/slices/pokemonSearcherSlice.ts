// Redux
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

// Utils
import { api } from '../../utils/axiosConfig'

// Types
import { PokemonWithDetails } from '../../types/pokemonCustomTypes'
import { getTeamFromLocalStorage } from '@utils/manageLocalStorage'

//utils
import { pokemonListLimit } from '@utils/constants/constants'


//Action to get pokemon when user search a pokemon
export const fetchPokemonSearched = createAsyncThunk(
  "pokemonSeacher/fetchPokemonSearched",
  async (pokemon: string, { dispatch }) => {
    // Verify that pokemon is on the limit of the requested limit pokemon
    if(!isNaN(parseInt(pokemon))){
      if(parseInt(pokemon) > pokemonListLimit){
        return
    }} 
    
    //Init the request
    const pokemonSearched = pokemon.toString().toLowerCase()
    try{
      // request pokemonInfo
      const pokemonRequested: PokemonWithDetails = await api.get(`pokemon/${pokemonSearched}`).then(res => res.data)
      if(pokemonRequested){
        // Verify that pokemon is on the limit of the requested limit pokemon
        if(pokemonRequested.id > pokemonListLimit){
          return
        }

        // verify team status with local storage for pokemon Team 
        const userTeam: PokemonWithDetails[] = getTeamFromLocalStorage()
        let pokemonWithDetail: PokemonWithDetails
        if(userTeam.find(member => member.id === pokemonRequested.id)) {
          pokemonWithDetail = { ...pokemonRequested, team: true }
        } else{
          pokemonWithDetail = {...pokemonRequested,team: false,}
        }
        dispatch(setPokemonSearched(pokemonWithDetail))
      }
    }catch(error) {
      console.log("error", error)
    }
  }
)

type PokemonSearcherState = {
  pokemonSearched: PokemonWithDetails
  term: string

  nextPokemon: PokemonWithDetails
}

// state
const initialState: PokemonSearcherState = {
  pokemonSearched: {} as PokemonWithDetails,
  term: "",

  nextPokemon: {} as PokemonWithDetails,
}

// slice for pokemonSearcher
export const pokemonSearcherSlice = createSlice({
  name: 'pokemonSearcher',
  initialState,
  reducers: {
    setPokemonSearched: (state: any, action: PayloadAction<PokemonWithDetails>) => {
      state.pokemonSearched = {...action.payload}
    },
    setTerm: (state: any, action: PayloadAction<string>) => {
      state.term = action.payload
    },

    setNextPokemon: (state: any, action: PayloadAction<PokemonWithDetails>) => {
      state.nextPokemon = {...action.payload}
    }
  }
})


export const { 
  setPokemonSearched,
  setTerm,

  setNextPokemon,

} = pokemonSearcherSlice.actions
export default pokemonSearcherSlice.reducer
