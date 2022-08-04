import React, { ChangeEvent } from 'react'
import { SearchBarContainer } from '@styles/Home/SearchBar/SearchBar'
import { useDebounce } from '@hooks/useDebounce'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchPokemonSearched } from '@redux/slices/pokemonSearcherSlice'

const SearchBar = () => {
  const pokemonSearched = useSelector((state: any) => state.pokemon.pokemonSearched, shallowEqual)
  const term = useSelector((state: any) => state.pokemon.term)
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if(value.length > 0) {
    dispatch(fetchPokemonSearched(value) as any)
    }
  }
  
  const dispatch = useDispatch()
  const searchItem = useDebounce<string>(term, 500)
  console.log(searchItem)

  console.log(pokemonSearched)

  return (
    <SearchBarContainer>
      <input type="text" placeholder="Busca a un Pokémon" onChange={(e) => handleChange(e)} />
      <p>Busca por nombre o número</p>
    </SearchBarContainer>
  )
}

export { SearchBar }
