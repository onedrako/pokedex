// Libraries
import React, { useEffect } from 'react'
// Redux
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchPokemonsWithDetails } from './redux/slices/pokemonSlice'

// Styles
import { GlobalStyles } from './styles/GlobalStyles'

// TS Types
// import { Pokemon } from './types/pokemonTypes'

const App = () => {
  const pokemons = useSelector((state: any) => state.pokemon.pokemons, shallowEqual)
  const loading = useSelector((state: any) => state.ui.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails() as any)
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
