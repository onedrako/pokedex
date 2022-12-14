// Redux
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { setLoading } from './uiSlice'

// Utils
import { api } from '../../utils/axiosConfig'
import { getData } from '../../utils/getData'
import {pokemonListLimit} from '@utils/constants/constants'

// Types
import { Pokemon, PokemonWithDetails } from '../../types/pokemonCustomTypes'
import { IPokemon } from 'pokeapi-typescript'
import { getTeamFromLocalStorage } from '@utils/manageLocalStorage'

// Dispatch to set the loading state and bring data from the API (pokemon with details)
// This is a async thunk, it will change loading state and bring data from the API
// first it get the list of pokemon from the API and then it get the details of each pokemon to render on the App, and finally change the loading state
export const fetchPokemonsWithDetails = createAsyncThunk(
  'pokemon/fetchPokemonWithDetails',
  async (apiParameters: string, { dispatch }) => {
    dispatch(setLoading(true))

    const pokemonList: Pokemon[] = await api.get(apiParameters).then(res => res.data.results)
    
    const pokemonWithDetail: PokemonWithDetails[] = 
      await Promise.all(pokemonList.map((pokemon) => getData(pokemon.url)))
      .then((res) => res.map((pokemon: IPokemon) => {
        const userTeam: PokemonWithDetails[] = getTeamFromLocalStorage()
        if(userTeam.find(member => member.id === pokemon.id)) {
          return { ...pokemon, team: true }
        } else{
          return {...pokemon,team: false,}
        }
      })
    )
    dispatch(setPokemons(pokemonWithDetail))
    dispatch(setLoading(false))
  }
)


type PokemonState = {
  pokemon: PokemonWithDetails[] 
  pokemonTeam: PokemonWithDetails[]  
  paginationOffset: number
  getMorePokemon: boolean

  pokemonToEliminateFromTeam: PokemonWithDetails

  pokemonToSendToEliminateAnimation: PokemonWithDetails[]
  pokemonToEliminateLength: number 
  
}

// state
const initialState: PokemonState = {
  pokemon: [],
  pokemonTeam: getTeamFromLocalStorage(),
  paginationOffset: 0,
  // For pokemon detailPage
  getMorePokemon: false,
  
  pokemonToEliminateFromTeam: {} as PokemonWithDetails,
  
  pokemonToSendToEliminateAnimation:[],
  pokemonToEliminateLength: 1
}

// slice for pokemon
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state: any, action: PayloadAction<PokemonWithDetails[]>) => {
      state.pokemon.push(...action.payload)
    },
    setPokemonsTeamOnList: (state: any, action: PayloadAction<PokemonWithDetails[]>) => {
      state.pokemon = [...action.payload]
    },
    setPaginationOffset: (state: any, action: PayloadAction<number>) => {
      state.paginationOffset = action.payload
    },
    setGetMorePokemon: (state: any, action: PayloadAction<boolean>) => {
      state.getMorePokemon = action.payload
    },


    setPokemonTeam: (state: any, action: PayloadAction<PokemonWithDetails[]>) => {
      state.pokemonTeam =  [...action.payload]
    },
    setPokemonToEliminateFromTeam: (state: any, action: PayloadAction<PokemonWithDetails>) => {
      state.pokemonToEliminateFromTeam = action.payload
    },


    setPokemonToSendToEliminateAnimation: (state: any, action: PayloadAction<PokemonWithDetails[]>) => {
      state.pokemonToSendToEliminateAnimation.push(...action.payload)
    },
    setPokemonListToEliminateAnimation: (state: any, action: PayloadAction<PokemonWithDetails[]>) => {
      state.pokemonToSendToEliminateAnimation = [...action.payload]
    },
    setPokemonToEliminateLength: (state: any, action: PayloadAction<number>) => {
      state.pokemonToEliminateLength = action.payload
    }
  }
})


export const { 
  // To change Pokemon List
  setPokemons, 
  setPokemonsTeamOnList,  
  setPaginationOffset,
  setGetMorePokemon,

  setPokemonTeam,
  setPokemonToEliminateFromTeam,

  setPokemonToSendToEliminateAnimation,
  setPokemonListToEliminateAnimation,
  setPokemonToEliminateLength

} = pokemonSlice.actions
export default pokemonSlice.reducer
