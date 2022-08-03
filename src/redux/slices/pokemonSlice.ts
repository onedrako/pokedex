// Redux
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { setLoading } from './uiSlice'

// Utils
import { api } from '../../utils/axiosConfig'
import { getData } from '../../utils/getData'

// Types
import { Pokemon } from '../../types/pokemonCustomTypes'
import { IPokemon } from 'pokeapi-typescript'

// Dispatch to set the loading state and bring data from the API (pokemon with details)
// This is a async thunk, it will change loading state and bring data from the API
// first it get the list of pokemon from the API and then it get the details of each pokemon to render on the App, and finally change the loading state
export const fetchPokemonsWithDetails = createAsyncThunk(
  'pokemon/fetchPokemonWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true))
    const pokemonList: Pokemon[] = await api.get('/pokemon?limit=10').then(res => res.data.results)
    const pokemonWithDetail: IPokemon[] = await Promise.all(pokemonList.map((pokemon) => getData(pokemon.url)))
    dispatch(setPokemons(pokemonWithDetail))
    dispatch(setLoading(false))
  }
)

// state
const initialState: {pokemon: Pokemon[], pokemonTeam: Pokemon[]} = {
  pokemon: [],
  pokemonTeam: []
}

// slice for pokemon
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state: any, action: PayloadAction<IPokemon[]>) => {
      state.pokemons = action.payload
    }
  }
})

export const pokemonTeanSlice = createSlice({
  name: 'pokemonTeam',
  initialState,
  reducers: {
    setPokemonsTeam: (state: any, action: PayloadAction<IPokemon[]>) => {
      state.pokemonTeam = action.payload
    }
  }
})

export const { setPokemons } = pokemonSlice.actions
export default pokemonSlice.reducer
