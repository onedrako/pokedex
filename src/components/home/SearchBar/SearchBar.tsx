import React, { ChangeEvent, useEffect } from 'react'
import { SearchBarContainer } from '@styles/Home/SearchBar/SearchBar'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchPokemonSearched, setPokemonSearched, setTerm } from '@redux/slices/pokemonSearcherSlice'
import PokemonItem from '../PokemonList/PokemonItem'
import { PokemonWithDetails } from '@customTypes/pokemonCustomTypes'

const SearchBar = () => {
  const pokemonSearched: PokemonWithDetails = useSelector((state: any) => state.pokemonSearcher.pokemonSearched, shallowEqual)
  const term = useSelector((state: any) => state.pokemonSearcher.term)
  const dispatch = useDispatch()
  const waitForDebouncer = 150;
  
  //When user type on input data is going here and term executes the effect to fetch pokemon data by search
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    
    dispatch(setTerm(value))
  }
  

  //Debouncer
  useEffect(() => {
    dispatch(setPokemonSearched({} as PokemonWithDetails))
    const timeoutId = window.setTimeout(() => {
      if(term.length > 0) {
        dispatch(fetchPokemonSearched(term) as any)
      }
    }, waitForDebouncer);

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [term])


  return (
    <SearchBarContainer>
      <input type="text" placeholder="Busca a un Pokémon" onChange={(e) => handleChange(e)} />
      <p>Busca por nombre o número</p>
      {term.length > 0 && pokemonSearched.id && <PokemonItem pokemon={pokemonSearched}/>}
      
    </SearchBarContainer>
  )
}

export { SearchBar }
