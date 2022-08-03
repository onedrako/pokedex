// Redux
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { setLoading } from './uiSlice'

// Utils
import { api } from '../../utils/axiosConfig'
import { getData } from '../../utils/getData'

// Types
import { Pokemon, PokemonWithDetails } from '../../types/pokemonCustomTypes'
import { IPokemon } from 'pokeapi-typescript'

// Dispatch to set the loading state and bring data from the API (pokemon with details)
// This is a async thunk, it will change loading state and bring data from the API
// first it get the list of pokemon from the API and then it get the details of each pokemon to render on the App, and finally change the loading state
export const fetchPokemonsWithDetails = createAsyncThunk(
  'pokemon/fetchPokemonWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true))
    const pokemonList: Pokemon[] = await api.get('/pokemon?limit=10').then(res => res.data.results)
    const pokemonWithDetail: PokemonWithDetails[] = 
      await Promise.all(pokemonList.map((pokemon) => getData(pokemon.url)))
      .then((res) => res.map((pokemon: IPokemon) => {
        return {...pokemon,team: false,}
      }
    )
    )
    
    // const pokemonWithDetail: IPokemon[] = await Promise.all(pokemonList.map((pokemon) => getData(pokemon.url)))
    // const pokemonWithTeamOption: PokemonWithDetails[] = [...pokemonWithDetail].map((pokemon: IPokemon) => {
    //   return { ...pokemon, team: false }
    // })
    console.log(pokemonWithDetail)
    dispatch(setPokemons(pokemonWithDetail))
    dispatch(setLoading(false))
  }
)

// state
const initialState: {pokemon: PokemonWithDetails[], pokemonTeam: PokemonWithDetails[]} = {
  pokemon: [],
  pokemonTeam: []
}

// slice for pokemon
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state: any, action: PayloadAction<PokemonWithDetails[]>) => {
      state.pokemons = action.payload
    },
    setPokemonsTeam: (state: any, action: PayloadAction<PokemonWithDetails[]>) => {
      state.pokemonTeam.push(...action.payload)
    }
  }
})


export const { setPokemons, setPokemonsTeam } = pokemonSlice.actions
export default pokemonSlice.reducer
