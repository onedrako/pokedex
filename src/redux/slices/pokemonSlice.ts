import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../utils/axiosConfig'
import { getData } from '../../utils/getData'
import { setLoading } from './uiSlice'
// import { Pokemon } from '../../types/pokemonTypes'

// Dispatch to set the loading state and bring data from the API (pokemon with details)
export const fetchPokemonsWithDetails = createAsyncThunk(
  'pokemon/fetchPokemonWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true))
    const pokemonList = await api.get('/pokemon?limit=151').then(res => res.data.results)
    const pokemonWithDetail = await Promise.all(pokemonList.map((pokemon: any) => getData(pokemon.url)))
    dispatch(setPokemons(pokemonWithDetail))
    dispatch(setLoading(false))
  }
)

// state
const initialState = {
  pokemon: []
}

// slice for pokemon
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state: any, action: any) => {
      state.pokemons = action.payload
    }
  }
})

export const { setPokemons } = pokemonSlice.actions
export default pokemonSlice.reducer
