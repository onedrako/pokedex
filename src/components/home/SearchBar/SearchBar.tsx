import React, { ChangeEvent, useEffect } from 'react'
import { SearchBarContainer } from '@styles/Home/SearchBar/SearchBar'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchPokemonSearched, setTerm } from '@redux/slices/pokemonSearcherSlice'
import PokemonItem from '../PokemonList/PokemonItem'
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'

const SearchBar = () => {
  const pokemonSearched: PokemonWithDetails = useSelector((state: any) => state.pokemonSearcher.pokemonSearched, shallowEqual)
  const term = useSelector((state: any) => state.pokemonSearcher.term)
  const dispatch = useDispatch()
  const waitForDebouncer = 250;
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    dispatch(setTerm(value))
  }
  

  //Debouncer
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      console.log('useEffect')
      if(term.length > 0) {
        dispatch(fetchPokemonSearched(term) as any)
      }
    }, waitForDebouncer);

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [term])

  console.log(pokemonSearched)

  return (
    <SearchBarContainer>
      <input type="text" placeholder="Busca a un Pokémon" onChange={(e) => handleChange(e)} />
      <p>Busca por nombre o número</p>
      {term.length > 0 && pokemonSearched.id && <PokemonItem pokemon={pokemonSearched}/>}
      
    </SearchBarContainer>
  )
}

export { SearchBar }
