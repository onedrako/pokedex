import { SearchBarContainer } from '@styles/Home/SearchBar/SearchBar'
import React from 'react'

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <input type="text" placeholder="Busca a un Pokémon" />
      <p>Busca por nombre o número</p>
    </SearchBarContainer>
  )
}

export { SearchBar }
