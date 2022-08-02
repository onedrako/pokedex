// Libraries
import React, { useEffect } from 'react'
// Redux
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchPokemonsWithDetails } from './redux/slices/pokemonSlice'

// Styles
import { GlobalStyles } from './styles/GlobalStyles'

// TS Types
// import { Pokemon } from './types/pokemonTypes'
import { IPokemon } from 'pokeapi-typescript'
import { AppDispatch } from '.'
import { AnyAction } from 'redux'

const App = () => {
  const pokemons: IPokemon[] = useSelector((state: any) => state.pokemon.pokemons, shallowEqual)
  const loading: boolean = useSelector((state: any) => state.ui.loading)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails() as any) // TODO
  }
  , [])

  console.log('data', pokemons)

  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default App
